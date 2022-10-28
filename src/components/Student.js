function Student (props){
    return(
        <> 
        {props.student.map((student)=>{
          return <div className="card mb-3 student" key={student.id}>
          <div className="row g-0">
            <div className="col-md-4">
              <img src={student.image} className=" " alt=""></img>
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{student.name}</h5>
                <p className="card-text">{student.website}</p>
                <p className="card-text">Skills: {student.skills.map((skill)=>{
                 return <span className="d-inline-block me-1" key={skill}>{skill}</span>
                })}</p>
               
                <p className="card-text"><small className="text-muted" >{student.email}</small></p>
              </div>
            </div>
          </div>
        </div>
        })}
        
        </>
    )
}
export default Student;