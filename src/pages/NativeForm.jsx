import { useState } from "react";
import InputTxt from "../components/InputTxt";
import useNativeForm from "../hooks/useNativeForm";

const NativeForm = () => {
  // 這裡用最基本的useState hook來呈現
  // level 1 
  const [nativeUser, setNativeUser] = useState('')
  const [nativePwd, setNativePwd] = useState('')

  // level 2
  const [nativeForm, setNativeForm] = useState({
    user: '',
    pwd: ''
  })

  const level2Change = e => setNativeForm({...nativeForm, [e.target.name]: e.target.value })

  // level 3 作自定義的form hook
  const [level3, setLevel3] = useNativeForm()

  const levelSend = e => {
    e.preventDefault();
    // console.log({nativeUser, nativePwd}); //level1
    // console.log(nativeForm) // level2
    // console.log(level3) // level3
  }

  return (
    <>
      <form onSubmit={levelSend}>
        <h2>Native Form</h2>
        <fieldset>
          <legend>level 1</legend>
          <div>
            <label htmlFor="native_user">用戶名(no css)</label>
            <input 
              id="native_user"
              name="native_user"
              value={nativeUser}
              onChange={e => setNativeUser(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="native_pwd">密碼(no css)</label>
            <input 
              id="native_pwd"
              name="native_pwd"
              type="password"
              value={nativePwd}
              onChange={e => setNativePwd(e.target.value)}
            />
          </div>
        </fieldset>
        <fieldset>
          <legend>level 2</legend>
          <div>
            <label htmlFor="user">用戶名(no css)</label>
            <input 
              id="user"
              name="user"
              value={nativeForm.user}
              onChange={level2Change}
            />
          </div>
          <div>
            <label htmlFor="pwd">密碼(no css)</label>
            <input 
              id="pwd"
              name="pwd"
              type="password"
              value={nativeForm.pwd}
              onChange={level2Change}
            />
          </div>
        </fieldset>
        <fieldset>
          <legend>level 3</legend>
          <div>
            <label htmlFor="user_l3">用戶名(no css)</label>
            <input 
              id="user_l3"
              name="user_l3"
              value={level3.user_l3 || ''}
              onChange={setLevel3}
            />
          </div>
          <div>
            <label htmlFor="pwd_l3">密碼(no css)</label>
            <input 
              id="pwd_l3"
              name="pwd_l3"
              type="password"
              value={level3.pwd_l3 || ''}
              onChange={setLevel3}
            />
          </div>
        </fieldset>
        
        <InputTxt 
          label="用戶名" 
        />

        <input type="submit" />
      </form>
    </>
  )
};

export default NativeForm