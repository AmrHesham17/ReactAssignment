const baseURL = "http://localhost:3004/students"
export const getStudents = async (name) => {
    let payload;
    try{
        let response = await fetch(`${baseURL}`)
        let data = await response.json()
        payload = data.filter((student)=> {return student.name.toLowerCase().includes(name.toLowerCase())})
        console.log(payload)
    }
    catch(err){
        console.log(err)
    }
    return {
        type: 'STUDENTS_LIST',
        payload
    }
}

export const deleteStudent = async (id) => {
    let payload;
    try{
        await fetch(`${baseURL}/${id}`, { method: 'DELETE' });
        payload = id
        console.log(payload)
    }
    catch(err){
        console.log(err)
    }
    return {
        type: 'DELETE_STUDENT',
        payload
    }
}

export const addStudent = async (_name, _age, _phone) => {
    let payload;
    try{
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: _name, age: Number(_age), phone: _phone })
        };
        const response = await fetch(`${baseURL}`, requestOptions);
        const data = await response.json()
        payload = data.id
        console.log(payload)
    }
    catch(err){
        console.log(err)
    }
    return {
        type: 'ADD_STUDENT',
        payload
    }
}




export const getStudentDetails = async (id) => {
    let payload;
    try{
        let response = await fetch(`${baseURL}/${id}`)
        payload = await response.json()
        console.log(payload)
    }
    catch(err){
        console.log(err)
    }
    return {
        type: 'STUDENT_DETAILS',
        payload
    }

}

export const clearStudentDetails = ()=>{
    return {
        type:'CLEAR_STUDENT_DETAILS',
        payload:null
    }
}
