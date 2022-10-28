import { useState } from "react";
import Student from './Student'

function Form(){
  const [studentData,setStudentData]=useState({
    id:0,
    name:"",
    email:"",
    website:"",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS89cwJFg8HGbhL4Pl0rErUz3qStXRO62EKpXVE0MqP&s",
    skill1:false,
    skill2:false,
    skill3:false,
    gender:""
  });
   const [students,setStudents]=useState([])
   

  function handleChange(event){
   const{name,value,checked,type}=event.target
   console.log(value)
   setStudentData((pre)=>{
       return{
        ...pre,
        [name]: type=== "checkbox"? checked : value
        //[name]:value
       }
   })
  
  }  
  function add(){
    let skills=[];
    if(studentData.skill1===true){
      skills.push("html")
    }
    if(studentData.skill2===true){
      skills.push("css")
    }
    if(studentData.skill3===true){
      skills.push("java")
    }
    if(skills.length < 1){
      skills.push("No Skills")
    }
    const myObject = {
      id: (students.length + 1),
      name: studentData.name,
      email: studentData.email,
      website: studentData.website,
      image: studentData.image,
      gender: studentData.gender,
      skills: skills
    }
    const tempArray = [...students]
    tempArray.push(myObject)
    setStudents(tempArray)
     console.log(students)
   
  }
  function handleSubmit(event) {
    event.preventDefault() 
   add();
    setStudentData({
      name:"",
      email:"",
      website:"",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS89cwJFg8HGbhL4Pl0rErUz3qStXRO62EKpXVE0MqP&s",
      skill1:false,
      skill2:false,
      skill3:false,
      gender:""
    })  
}
function clear(){
  setStudentData({

    name:"",
    email:"",
    website:"",
    image:"",
   skill1:false,
   skill2:false,
   skill3:false,
    gender:""
  })
   
}


   return(
    <>
   
    <div className=" d-flex justify-content-around mt-5 row">
    <form className="form-component bg-light col-5 " onSubmit={handleSubmit}>
    <div className="mb-3 row  ">
    <label htmlFor="inputName" className="col-sm-4  col-form-label">Name</label>
    <div className="col-sm-8">
      <input type="text" className="form-control" id="inputName" 
      value={studentData.name}
      name="name"
      onChange={handleChange}
      required ></input>
    </div>
  </div>
  <div className="mb-3 row">
    <label htmlFor="inputEmail" className="col-sm-4 col-form-label">Email</label>
    <div className="col-sm-8">
      <input type="email" className="form-control" id="inputEmail" required
      value={studentData.email}
      name="email"
      onChange={handleChange}></input>
    </div>
  </div>
  <div className="mb-3 row">
    <label htmlFor="inputWebsite" className="col-sm-4  col-form-label">Website</label>
    <div className="col-sm-8">
      <input type="text" className="form-control" id="inputWebsite"
      value={studentData.website}
      name="website"
      onChange={handleChange}></input>
    </div>
  </div>
  <div className="mb-3 row">
    <label htmlFor="inputImage" className="col-sm-4 col-form-label">Image Link</label>
    <div className="col-sm-8">
      <input type="text" className="form-control" id="inputImage"
      value={studentData.image}
      name="image"
      onChange={handleChange}></input>
    </div>
  </div>

  <div className="mb-3 row">
    <label  className="col-sm-4 col-form-label">Gender</label>
    <div className="col-sm-8">
    <div className="form-check">
  <input className="form-check-input" type="radio"  id="flexRadioDefault1" 
   value="male"
   name="gender"
   checked={studentData.gender === "male"}
   onChange={handleChange}>

  </input>
  <label className="form-check-label" htmlFor="flexRadioDefault1">
  Male
  </label>
</div>
<div className="form-check">
  <input className="form-check-input" type="radio"  id="flexRadioDefault2"
  value="female"
  name="gender"
  checked={studentData.gender === "female"}
  onChange={handleChange}></input>
  <label className="form-check-label" htmlFor="flexRadioDefault2">
   Female
  </label>
</div>
    </div>
  </div>

  <div className="mb-3 row ">
    <label  className="col-sm-4 col-form-label">Skills</label>
  <div className="col-sm-8 ">
  <div className="check-box ">
  <div className="form-check form-check-inline">
  <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="html" 
   checked={studentData.skill1}
  onChange={handleChange}
  name="skill1"></input>
  <label className="form-check-label" htmlFor="inlineCheckbox1">HTML</label>
</div>
<div className="form-check form-check-inline">
  <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="css" 
   checked={studentData.skill2}
   onChange={handleChange}
   name="skill2"></input>
  <label className="form-check-label" htmlFor="inlineCheckbox1">CSS</label>
</div>
<div className="form-check form-check-inline">
  <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="java"
   onChange={handleChange}
   checked={studentData.skill3}
   name="skill3"></input>
  <label className="form-check-label" htmlFor="inlineCheckbox1">Java</label>
</div>
  </div>
 </div>
</div>

  <button type="submit" className="btn btn-primary d-inline-block " >Enroll Student</button>
  <button type="submit" className="btn btn-danger d-inline-block ms-3" onClick={clear}>Clear</button>
</form>
<div className="col-4 ">
<Student student={students}/>
</div>

    </div>
   
    </>
   )
}
export default Form; 