
import React, { useState } from 'react'

const Search = ({getQuery}) => {
  const [text, setText] = useState('')

  const trackInput = (q) =>{
    setText(q)
    getQuery(q)
    
  }
  
  return (
    <section className='search'>
       <form>
       <input
       value={text}
        type='text'
        className='form-control'
        placeholder='Search characters'
        onChange={ (e) => trackInput(e.target.value)}
        />
      </form>
    </section>
  )
}

export default Search




// import React, { useState } from 'react'

// const Search = ({ getQuery }) => {
//   const [text, setText] = useState('')

//   const onChange = (q) => {
//     setText(q)
//     getQuery(q)
//   }

//   return (
//     <section className='search'>
//       <form>
//         <input
//           type='text'
//           className='form-control'
//           placeholder='Search characters'
//           value={text}
//           onChange={(e) => onChange(e.target.value)}
//           autoFocus
//         />
//       </form>
//     </section>
//   )
// }

// export default Search
