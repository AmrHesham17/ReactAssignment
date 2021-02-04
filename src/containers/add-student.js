import { addStudent, getStudents } from '../actions'
import { useRef } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
const AddStudent = ({addStudent, getStudents}) => {
    const name = useRef()
    const age = useRef()
    const phone = useRef()

    const addTheStudent = async () => {

        let phoneNumber = phone.current.value;
        let bool1 = /^011/.test(phoneNumber); 
        let bool2 = /^010/.test(phoneNumber); 
        let bool3 = /^012/.test(phoneNumber);
        
        
        if(name.current.value != "" && age.current.value != "" && phone.current.value != ""
        && age.current.value >= 18 && age.current.value <= 60 && bool1 || bool2 || bool3)
        {
            await addStudent(name.current.value, age.current.value, phone.current.value)
            await getStudents("")
        } else {
            alert("Wrong Data")
        }
    }

    return (
        <form>
            <div className="form-group">
                <input ref={name} type="text"
                className="form-control" name="name" id="name" placeholder="Student Name" required/>
            </div>
            <div className="form-group">
                <input ref={age} type="number"
                className="form-control" min="15" max="25" name="name" id="name" placeholder="Student Age" required/>
            </div>
            <div className="form-group">
                <input ref={phone} type="text"
                className="form-control" name="name" id="name" placeholder="Student Phone" required/>
            </div>
            <div className="d-flex">
                <button type="button" style={{width:'200px'}} className="btn btn-primary mx-auto"
                onClick={addTheStudent}
                >Add New Student</button>
            </div>
        </form>
    )
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ addStudent, getStudents }, dispatch)
}
export default connect(null, mapDispatchToProps)(AddStudent)