import React, { useEffect, useState } from 'react';

interface YtDataType { _id: any, link: string; type: string; title: string; tags: string[]; }

const Instagram = () => {
  const [ytData, setYtData] = useState<YtDataType[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function FetchData() {
      setLoading(true);
      let token = localStorage.getItem('token');
      if (!token) return;
      let response = await fetch('http://localhost:3000/api/v1/content', {
        headers: {
          'Content-Type': 'application/json',
          "authorization": token
        }
      });
      
      let data: YtDataType[] = await response.json();
      console.log(data);
      setYtData(data);
      
    }
    FetchData();
    setLoading(false);
  },[ytData]);

  let handleDelete = async (para: any) => {
    let token = localStorage.getItem("token");
    if(!token){
      return
    }
    let response = await fetch(`http://localhost:3000/api/v1/content/${para}`, {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json',
        "authorization": token
      }
    });
    let Data = await response.json();
    console.log(Data);
  }

  return (
    <div className="bg-gray-900 text-white rounded-2xl p-4 flex flex-wrap shadow-lg w-[100%] h-[92%] overflow-scroll">
      {loading && <>Loading...</>}
      {ytData.map((data, index) => (data.type == "instagram" &&
        <div key={index} className="bg-gray-900 text-white rounded-2xl p-4 shadow-lg w-full max-w-md">
          <div className="flex-col items-center gap-2 mb-2">
            <iframe src={`${data.link}embed`}></iframe>
            <a href={data.link} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline text-sm">View Details</a>
            <span className="bg-blue-600 text-xs text-white px-2 py-1 rounded-md">{data.type}</span>
            <h3 className="text-lg font-semibold">{data.title}</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {data.tags.map((tag, tagIndex) => (
              <span key={tagIndex} className="bg-gray-700 text-xs text-white px-2 py-1 rounded-md">{tag}</span>
            ))}
          </div>
          <button onClick={() => handleDelete(data._id)} className="mt-3 bg-red-600 text-white text-xs px-3 py-1 rounded-md hover:bg-red-700">
            Delete
          </button>
        </div>

      ))}
    </div>
  );
};

export default Instagram;
