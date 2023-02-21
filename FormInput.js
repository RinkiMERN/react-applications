import React, {memo} from 'react'

const FormInput = ({state, setCounting}) => {
    console.log('====================================')
    console.log('hii')
    console.log('====================================')
  return (
    <div>
    {
                state.map((val, index)=>{
                    return <p key={index}>{val + index}</p>
                })
            }
            <button onClick={setCounting}>click me</button>
    </div>
  )
}

export default memo(FormInput)
