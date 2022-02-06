import { Descriptions, Spin, notification } from 'antd';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from 'react-icons/ai';
interface ListData {
  title: string;
  value: number | unknown;
}
export default function ListPage() {
  const [listData, setListData] = useState<ListData[]>();
  const [loading, setLoading] = useState<boolean>(false);
  const [peviousId, setPeviousId] = useState<number | unknown>();

  const GetData = async () => {
    const data = await axios({
      url: `https://random-data-api.com/api/beer/random_beer`,
      method: 'GET',
    })
      .then((response) => {
        return response;
      })
      .catch((error) => {
        return error.response;
      });
    if (data.status === 200) {
      setTimeout(() => {
        setLoading(false);
      }, 500);
      // chang format data for listData
      const dataFormat = Object.entries(data.data).map(([title, value]) => ({
        title,
        value,
      }));
      setListData(dataFormat);
      CreateBeer(data.data);
    }
  };

  const Title = () => {
    return (
      <>
        <div className="box_title_list">
          <div className="box_title_page">
            <h3>Beer Info</h3>
          </div>
        </div>
      </>
    );
  };

  const handleNext = () => {
    const oldData = listData.filter((val) => val.title === 'id');
    if (oldData !== undefined) setPeviousId(oldData.pop().value);
    GetData();
  };

  const handlePrevious = async () => {
    const data = await axios({
      url: `http://localhost:3500/beer?id=${peviousId}`,
      method: 'GET',
    })
      .then((response) => {
        return response;
      })
      .catch((error) => {
        return error.response;
      });

    const dataFommat = Object.entries(data.data).map(([title, value]) => ({
      title,
      value,
    }));
    setListData(dataFommat);
    setPeviousId(undefined);
  };

  const CreateBeer = async (data: any) => {
    const result = await axios({
      url: `http://localhost:3500/api/beer/create`,
      method: 'POST',
      data: data,
    })
      .then((response) => {
        console.log(response);

        return response;
      })
      .catch((error) => {
        return error.response;
      });
    if (result.status === 200) {
      Notification(result.data.message, 'success');
    } else {
      Notification(result.data.message, 'error');
    }
  };

  const Notification = (message: string, notiType: string) => {
    let icon = null;
    switch (notiType) {
      case 'success':
        icon = <AiOutlineCheckCircle style={{ color: '#58e464' }} />;
        break;
      case 'error':
        icon = <AiOutlineCloseCircle style={{ color: '#f05a5a' }} />;
        break;
    }
    notification.open({
      message,
      icon,
      duration: 4,
    });
  };

  useEffect(() => {
    setLoading(true);
    GetData();
  }, []);

  return (
    <>
      <div className="container pt-5 pb-5">
        <Spin spinning={loading}>
          <Descriptions title={Title()} bordered>
            {listData?.map((val: any) => {
              return (
                <>
                  <Descriptions.Item label={val.title} span={4}>
                    {val.value}
                  </Descriptions.Item>
                </>
              );
            })}
          </Descriptions>
          <div className="box-next-previous">
            <div className="box-previous">
              <button
                disabled={peviousId !== undefined ? false : true}
                className="btn btn-secondary"
                onClick={handlePrevious}
              >
                Previous
              </button>
            </div>
            <div className="box-next text-right">
              <button className="btn btn-primary" onClick={handleNext}>
                Next
              </button>
            </div>
          </div>
        </Spin>
      </div>
    </>
  );
}
