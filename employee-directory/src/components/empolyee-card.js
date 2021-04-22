import React from "react";

function EmployeeCard({image, name, dept, email, phone}) 
{ 
    return(
        <>
        
        <div className="card border-success mb-3">
          <img
            style ={{maxWidth: "50px"}}
           src={image}
           alt="employee"
           />

           <p>{name}</p>
           <p>{dept}</p>
           <p>{email}</p>
           <p>{phone}</p>

      </div>
      </>
    )
    }

export default EmployeeCard;