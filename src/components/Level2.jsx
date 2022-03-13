import { useContext } from "react"
import { ExpContext } from "../pages/ContextTutorial"

const Level2 = () => {
  // 這裡透過useContext 來取得已經create 的 context，所接收的值為context.provider 內的 value
  // 透過此方式拿資料就不需要層層傳遞
  const { nativeForm, setNativeForm } = useContext(ExpContext)
  return (
    <fieldset>
      <legend>level 2 整合過後的useState</legend>
      <div>
        <label htmlFor="user">用戶名(no css)</label>
        <input 
          id="user"
          name="user"
          value={nativeForm.user}
          onChange={e => setNativeForm({...nativeForm, [e.target.name]: e.target.value })}
        />
      </div>
      <div>
        <label htmlFor="pwd">密碼(no css)</label>
        <input 
          id="pwd"
          name="pwd"
          type="password"
          value={nativeForm.pwd}
          onChange={e => setNativeForm({...nativeForm, [e.target.name]: e.target.value })}
        />
      </div>
    </fieldset>
  )
}

export default Level2