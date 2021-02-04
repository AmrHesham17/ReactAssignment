import { useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getStudentDetails, clearStudentDetails, deleteStudent } from '../actions'
const StudentDetails = ({ getStudentDetails, deleteStudent, clearStudentDetails, details, match, history }) => {
    const id = match.params.id
    useEffect(() => {
        getStudentDetails(id)

        return ()=>{
            clearStudentDetails()
        }
    },[])

    const deleteTheStudent = () => {
        let confirm = window.confirm("Are you sure you want to delete?")
        if(confirm) {
            deleteStudent(details.id)
            history.push(`/`)
        }
    }

    const renderStudentDetails = (details) => {
        if (details && details.id) {
            return (
                <div className="container" style={{marginTop: "20px"}}>
                    <h2>
                        Name: {details.name}
                    </h2>
                    <h2>
                        Age: {details.age}
                    </h2>
                    <h2>
                        Phone: {details.phone}
                    </h2>
                    <button type="button" className="btn btn-danger"
                    onClick={deleteTheStudent}>Delete</button>
                </div>
            )
        }
        return ''
    }
    return (<div>
        {renderStudentDetails(details)}
    </div>)

}


const mapStateToProps = (state) => {
    return {
        details: state.students.details
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ getStudentDetails ,clearStudentDetails, deleteStudent}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentDetails)