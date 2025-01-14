import React, { useState } from 'react'
import { useAuthContext } from 'Context/AuthContext'
import { Button, Col, Form, Input, Progress, Row, Typography } from 'antd'
import FormItem from 'antd/es/form/FormItem'
import { doc, serverTimestamp, setDoc } from 'firebase/firestore'
import { firestore, storage } from 'config/firebase'
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'

const { Title } = Typography


const inititalstate = { title: "", sub: "", content: "" }
export default function Home() {
  const { user } = useAuthContext()
  const [state, setstate] = useState(inititalstate)
  const [isLoading, setisLoading] = useState(false)
  const [file, setFile] = useState({})
  const [progress, setprogress] = useState("")

  const handleChange = (e) => setstate(s => ({ ...s, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    const { title, sub, content } = state
    if (!title && !sub && !content) return window.toastify("Please Enter Your Todo", "error")

    setisLoading(true)

    const formdata = { title, sub, content, DateCreated: serverTimestamp(), id: Math.random().toString(36).slice(2), userId: user.uid,  }
    if (file.name) {
      uploaddata(formdata)
    }
    else {
      createdocument(formdata)
    }
  }

  const uploaddata = (formdata) => {
    const fileName = formdata.id + "-" + file.name

    const storageRef = ref(storage, `Notes-images/${fileName}`);

    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on('state_changed',
      (snapshot) => {
        const progress1 = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress1 + '% done');
        setprogress(Math.floor(progress1))

      },
      (error) => {
        console.log(error);

      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log('File available at', downloadURL);
          const data = { ...formdata, photo: { url: downloadURL, imageName: fileName } }
          createdocument(data)
        });
      }
    );
  }

  const createdocument = async (formdata) => {
    try {
      await setDoc(doc(firestore, "Notes", formdata.id), formdata);
      window.toastify("Successfully Added", "success")
      setstate(inititalstate)

    } catch (e) {
      console.error("Error adding document: ", e);
    }
    setisLoading(false)
    setprogress("")
  }
  return (
    <>
      <main className='d-flex justify-content-center align-items-center ' >
        <div className='card w-100 border border-dark p-4 ' style={{ maxWidth: "600px" }}>
          <Title level={2} className='text-center'>Add Notes </Title>

          <Form layout='vertical' onSubmitCapture={handleSubmit}>
            <Row gutter={[16]}  >
              <Col span={24}>
                <FormItem label="Title" required labelCol={{ span: 24 }} wrapperCol={{ span: 24 }} style={{ marginBottom: 8, }} >
                  <Input size='large' placeholder='Title' type='text' name='title' value={state.title} onChange={handleChange} />
                </FormItem>
              </Col>
              <Col span={24} >
                <FormItem label="Content" labelCol={{ span: 24 }} wrapperCol={{ span: 24 }} style={{ marginBottom: 8 }}>
                  <Input.TextArea placeholder='Content' name='content' rows={5} value={state.content} spellCheck="false" onChange={handleChange} />
                </FormItem>
              </Col>
              <Col span={24}>
                <FormItem label="Subject" labelCol={{ span: 24 }} wrapperCol={{ span: 24 }} style={{ marginBottom: 8 }} >
                  <Input size='large' placeholder='Subject' type='text' name='sub' value={state.sub} onChange={handleChange} />
                </FormItem>
              </Col>
              <Col span={24}>
                <FormItem label="File" labelCol={{ span: 24 }} wrapperCol={{ span: 24 }} style={{ marginBottom: 8 }} >
                  {/* <input type="file"  onChange={e => { setFile(e.target.files[0]) }} className="file-input file-input-bordered file-input-primary w-full max-w-xs" /> */}
                  <Input type='file' onChange={e => { setFile(e.target.files[0]) }} />
                  {file && progress ? <Progress percent={progress} percentPosition={{ align: 'start', type: 'outer' }} /> : ""}

                </FormItem>
              </Col>

              <Col span={24}>
                <Button className='mt-2  text-white ' type='primary' size='large' block loading={isLoading} onClick={handleSubmit}>ADD Notes</Button>
              </Col>

            </Row>

          </Form>

        </div>
      </main>
    </>
  )
}
