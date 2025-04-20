
// localStorage.clear()
const employees = [
    {
        "id":1,
        "firstName":"Arjun",
        "email":"employee1@example.com",
        "password":"123",
        "role":"employees",
        "tasks":[
        {
            "active":true,
            "newTask":true,
            "completed":false,
            "failed": false,
            "taskTitle":"Update Website",
            "taskDescription":"Revamp the homepage design",
            "category":"Design"
        },
        {
            "active":true,
            "newTask":true,
            "completed":false,
            "failed": false,
            "taskTitle":"Update Website",
            "taskDescription":"Revamp the homepage design",
            "category":"Design"
        },
        {
            "active":true,
            "newTask":true,
            "completed":false,
            "failed": false,
            "taskTitle":"Update Website",
            "taskDescription":"Revamp the homepage design",
            "category":"Design"
        },
        {
            "active":true,
            "newTask":true,
            "completed":false,
            "failed": false,
            "taskTitle":"Update Website",
            "taskDescription":"Revamp the homepage design",
            "category":"Design"
        },
        {
            "active":true,
            "newTask":true,
            "completed":false,
            "failed": false,
            "taskTitle":"Update Website",
            "taskDescription":"Revamp the homepage design",
            "category":"Design"
        },
    
    ]
    },
    {
        "id":2,
        "firstName":"Navneet",
        "email":"employee2@example.com",
        "password":"123",
        "role":"employees",
        "tasks":[
            {
                "active":true,
                "newTask":true,
                "completed":false,
                "failed": false,
                "taskTitle":"Update Website",
                "taskDescription":"Revamp the homepage design",
                "category":"Design"
            },
            {
                "active":true,
                "newTask":true,
                "completed":false,
                "failed": false,
                "taskTitle":"Update Website",
                "taskDescription":"Revamp the homepage design",
                "category":"Design"
            },
            {
                "active":true,
                "newTask":true,
                "completed":false,
                "failed": false,
                "taskTitle":"Update Website",
                "taskDescription":"Revamp the homepage design",
                "category":"Design"
            },
            {
                "active":true,
                "newTask":true,
                "completed":false,
                "failed": false,
                "taskTitle":"Update Website",
                "taskDescription":"Revamp the homepage design",
                "category":"Design"
            },
            {
                "active":true,
                "newTask":true,
                "completed":false,
                "failed": false,
                "taskTitle":"Update Website",
                "taskDescription":"Revamp the homepage design",
                "category":"Design"
            },
        
        ]
    },
    {
        "id":3,
        "firstName":"Arjun",
        "email":"employee3@example.com",
        "password":"123",
        "role":"employees",
        "tasks":[
            {
                "active":true,
                "newTask":true,
                "completed":false,
                "failed": false,
                "taskTitle":"Update Website",
                "taskDescription":"Revamp the homepage design",
                "category":"Design"
            },
            {
                "active":true,
                "newTask":true,
                "completed":false,
                "failed": false,
                "taskTitle":"Update Website",
                "taskDescription":"Revamp the homepage design",
                "category":"Design"
            },
            {
                "active":true,
                "newTask":true,
                "completed":false,
                "failed": false,
                "taskTitle":"Update Website",
                "taskDescription":"Revamp the homepage design",
                "category":"Design"
            },
            {
                "active":true,
                "newTask":true,
                "completed":false,
                "failed": false,
                "taskTitle":"Update Website",
                "taskDescription":"Revamp the homepage design",
                "category":"Design"
            },
            {
                "active":true,
                "newTask":true,
                "completed":false,
                "failed": false,
                "taskTitle":"Update Website",
                "taskDescription":"Revamp the homepage design",
                "category":"Design"
            },
        
        ]
    },
    {
        "id":4,
        "firstName":"Avdesh",
        "email":"employee4@example.com",
        "password":"123",
        "role":"employees",
        "tasks":[
            {
                "active":true,
                "newTask":true,
                "completed":false,
                "failed": false,
                "taskTitle":"Update Website",
                "taskDescription":"Revamp the homepage design",
                "category":"Design"
            },
            {
                "active":true,
                "newTask":true,
                "completed":false,
                "failed": false,
                "taskTitle":"Update Website",
                "taskDescription":"Revamp the homepage design",
                "category":"Design"
            },
            {
                "active":true,
                "newTask":true,
                "completed":false,
                "failed": false,
                "taskTitle":"Update Website",
                "taskDescription":"Revamp the homepage design",
                "category":"Design"
            },
            {
                "active":true,
                "newTask":true,
                "completed":false,
                "failed": false,
                "taskTitle":"Update Website",
                "taskDescription":"Revamp the homepage design",
                "category":"Design"
            },
            {
                "active":true,
                "newTask":true,
                "completed":false,
                "failed": false,
                "taskTitle":"Update Website",
                "taskDescription":"Revamp the homepage design",
                "category":"Design"
            },
        
        ]
    },
    {
        "id":5,
        "firstName":"Amrita",
        "email":"employee5@example.com",
        "password":"123",
        "role":"employees",
        "tasks":[
            {
                "active":true,
                "newTask":true,
                "completed":false,
                "failed": false,
                "taskTitle":"Update Website",
                "taskDescription":"Revamp the homepage design",
                "category":"Design"
            },
            {
                "active":true,
                "newTask":true,
                "completed":false,
                "failed": false,
                "taskTitle":"Update Website",
                "taskDescription":"Revamp the homepage design",
                "category":"Design"
            },
            {
                "active":true,
                "newTask":true,
                "completed":false,
                "failed": false,
                "taskTitle":"Update Website",
                "taskDescription":"Revamp the homepage design",
                "category":"Design"
            },
            {
                "active":true,
                "newTask":true,
                "completed":false,
                "failed": false,
                "taskTitle":"Update Website",
                "taskDescription":"Revamp the homepage design",
                "category":"Design"
            },
            {
                "active":true,
                "newTask":true,
                "completed":false,
                "failed": false,
                "taskTitle":"Update Website",
                "taskDescription":"Revamp the homepage design",
                "category":"Design"
            },
        
        ]
    },
]

const admin = [{
    "id":1,
    "firstName":"Adarsh",
    "email":"admin12@gmail.com",
    "password":"123",
    "role":"admin",
}]
const teamLead = [{
    "id":1,
    "firstName":"Sanjeev",
    "email":"sanjeev@gmail.com",
    "password":"123",
    "role":"teamLead",
}]

// export const setLocalStorage = ()=>{
//     localStorage.setItem('employees',JSON.stringify(employees))
//     localStorage.setItem('admin',JSON.stringify(admin))
// }
// export const getLocalStorage = ()=>{
//     const employees = JSON.parse(localStorage.getItem('employees')) || [];
//     const admin = JSON.parse(localStorage.getItem('admin')) || [];
//     console.log("Employees:", employees);
//     console.log("Admin:", admin);
//     // return {employees,admin} 

// }

export const setLocalStorage = () => {
    if (!localStorage.getItem('employees')) {
      localStorage.setItem('employees', JSON.stringify(employees));
      console.log("localstorage emp",employees)
    }
    if (!localStorage.getItem('admin')) {
      localStorage.setItem('admin', JSON.stringify(admin));
      console.log("localstorage",admin)
    }
    if (!localStorage.getItem('teamLead')) {
      localStorage.setItem('teamLead', JSON.stringify(teamLead));
      console.log("localstorage",teamLead)
    }
  };
export const getLocalStorage = ()=>{
    const employees = JSON.parse(localStorage.getItem('employees')) || [];
    const admin = JSON.parse(localStorage.getItem('admin')) || [];
    const teamLead = JSON.parse(localStorage.getItem('teamLead')) || [];
    console.log("Employees:", employees);
    console.log("Admin:", admin);
    console.log("teamLead:", teamLead);
    return { employees, admin ,teamLead}; 
}
