import {
  Form,
  Input,
  Button,
  notification,
} from 'antd';
import {useState,useEffect} from 'react'
import axios from 'axios'
import {AiOutlineCheckCircle, AiOutlineCloseCircle}  from "react-icons/ai";
import { useRouter } from 'next/router'

interface inputType {
  name: string
}

interface FieldData {
  name: string | number | (string | number)[];
  value?: any;
  touched?: boolean;
  validating?: boolean;
  errors?: string[];
}

const inputname:inputType[] = [
  {name: 'uid'},
  {name: 'brand'},
  {name: 'name'},
  {name: 'style'},
  {name: 'hop'},
  {name: 'yeast'},
  {name: 'malts'},
  {name: 'ibu'},
  {name: 'alcohol'},
  {name: 'blg'}
]

export default function Create() {
  const router = useRouter()
  const [fields, setFields] = useState<FieldData[]>([]);

  const GetDataInput = async() => {
    await axios({
      url: `https://random-data-api.com/api/beer/random_beer`,
      method: 'GET',
    })
    .then((response) => {
      if(response.status === 200){
        const datas = Object.entries(response.data).map(([name, value]) => ({name,value}));        
        setFields(datas)
      }
    })
    .catch((error) => {
      return error.response
    }) 
  }
  const onFinish = async(values: any) => {
   const data =  await axios({
      url: `http://localhost:3500/api/beer/create`,
      method: 'POST',
      data: values,
    })
    .then((response) => {
      if(response.status === 200){
        console.log(response);
        return response
      }
    })
    .catch((error) => {
      return error.response
    })
    if(data.status === 200){
      Notification(data.data.message,'success')
      setTimeout(() => {
        router.push('/list')
      }, 1200);
    }else{
      Notification(data.data.message,'error')
    }
  };

  const Notification = (message: string, notiType: string) => {
    let icon = null
    switch (notiType) {
      case 'success':
        icon = <AiOutlineCheckCircle style={{ color: '#58e464' }} />
        break
      case 'error':
        icon = <AiOutlineCloseCircle style={{ color: '#f05a5a' }} />
        break
    }
    notification.open({
      message,
      icon,
      duration: 4,
    })
  }
  
  useEffect(()=> {
    GetDataInput()
  },[])

  return (
    <>
    <div className='container pt-5 pb-5'>
      <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        fields={fields}
        onFinish={onFinish}
      >
        {inputname.map((val:inputType) => {
            return (
              <>
              <Form.Item label={val.name} name={val.name}  rules={[{ required: true }]}>
                <Input  />
              </Form.Item>
              </>
            )
        })}
         <div className='col-sm-10 box_btn_submit'>
          <Button type="primary" htmlType="submit" className='mr-3'>
            Submit
          </Button>
          <Button type="primary" className='ml-3' danger onClick={() => router.push('/list')}>
            cancel
          </Button>
        </div>
      </Form>
    </div>
    </>
  )
}