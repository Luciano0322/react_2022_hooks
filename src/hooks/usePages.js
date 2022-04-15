import { useEffect, useState } from "react"

const usePages = (arrData, list = 5) => {
  const [pageData, setPageData] = useState(null)
  useEffect(() => {
    if(arrData.length > 0 && list > 0) {
      let listArr = []
      for(let i = 0; i < arrData.length; i += list) {
        listArr.push(arrData.slice(i, i+list));
      }
      if(pageData === null || 
        listArr.length !== pageData.length || 
        listArr[listArr.length - 1].length !== pageData[pageData.length - 1].length
      ) {
        setPageData(listArr)
      } else{
        return
      }
    }
    
  },[arrData, list, pageData])

  return { pageData, totalPages: pageData?.length  }
}

export default usePages;