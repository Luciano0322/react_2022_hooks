import { useEffect, useState } from "react";
import axios from "axios";
import useFetch from "../hooks/useFetch";

const FetchData = () => {
  const [data, setData] = useState(null);
  // 此為拿一次的做法
  useEffect(() => {
    axios.get("https://v2.jokeapi.dev/joke/Any")
    .then((res)=>{
      setData(res.data)
    })
  },[])
  // 這個為custom hook的做法
  const { data: custData, loading, error, refetch } = useFetch("https://v2.jokeapi.dev/joke/Any");
  return (
    <div>
      <h1>ex: useEffect hook</h1>
      <h3>{data?.setup}</h3>
      <p>{data?.delivery}</p>

      <h1>custom hook</h1>
      {loading && <p>loading...</p>}
      {error && <p>error...</p>}
      <h3>{custData?.setup}</h3>
      <p>{custData?.delivery}</p>
      <button onClick={refetch}> 重新拿取資料 </button>
    </div>
  )
}

export default FetchData;