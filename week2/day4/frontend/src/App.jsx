import React,{useState} from "react";
import axios from "axios"

function App(){
  const [formData, setFormData] = useState({
    name:"",
    email:"",
    password:""
  })


const handleChange = (e)=>{
  const {name, value} = e.target
  console.log(e.target);

  
    setFormData((prev)=>({
      ...prev,
      [name]:value
    }))

    return;
  }

//   if(name==="email"){
//     setFormData((prev)=>({
//       ...prev,
//       [name]:value
//     }))

//     return;
//   }

//   if(name==="password"){
//     setFormData((prev)=>({
//       ...prev,
//       [name]:value
//     }))

//     return;
//   }
  
// }

const handleSubmit = async (e)=>{
  e.preventDefault()

  const res = await axios.post("http://localhost:4000/signup", formData)
  console.log(formData);
  

}

return (
  <div>
    <h1>Signup page</h1>
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" id = "" value={formData.name} onChange={handleChange} placeholder='name' />
      <br />
      <input type="email" name="email" id = "" value={formData.email} onChange={handleChange} placeholder='email' />
      <br />
      <input type="password" name="password" id = "" value={formData.password} onChange={handleChange} placeholder='password' />
      <br />
      <button type="submit">Submit</button>

      
      
    </form>
  </div>
)
}
export default App