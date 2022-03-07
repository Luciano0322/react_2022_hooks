import { useEffect, useState } from "react"
import axios from "axios"

// 可以以此類推做出不同的拿取hooks
const useFetch = (url) => {
  const [data, setData] = useState(null);
  // 方便你切換loading的動畫圖示
  const [loading, setLoading] = useState(false);
  // 錯誤顯示
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios.get(url)
    .then(res => {
      setData(res.data);
    })
    .catch(err => {
      setError(err);
    })
    .finally(() => {
      setLoading(false);
    })
  }, [url])

  const refetch = () => {
    setLoading(true);
    axios.get(url)
    .then(res => {
      setData(res.data);
    })
    .catch(err => {
      setError(err);
    })
    .finally(() => {
      setLoading(false);
    })
  }

  return { data, loading, error, refetch };
}

export default useFetch