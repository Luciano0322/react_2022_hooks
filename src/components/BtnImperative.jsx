import { forwardRef, useImperativeHandle, useState } from "react"

const BtnImperative = forwardRef((props, ref) => {
  // 提列ref的時候需要用到forwardRef包裝整個component，記得ref要在props之後。
  const [toggle, setToggle] = useState(false);
  // 這個hook可以自訂義要從ref裡面提列的key，也就是說可以從父層拿到子層的func || state
  useImperativeHandle(ref, () => ({
    alterToggle() {
      setToggle(!toggle)
    }
  }))
  return (
    <>
      <button
        onClick={() => {
          setToggle(!toggle)
        }}
      >
        btn from child
      </button>
      {toggle && <span>Toggle</span>}
    </>
  );
});

export default BtnImperative;