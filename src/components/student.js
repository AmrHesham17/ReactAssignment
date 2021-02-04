const Student = ({ studentInfo,history }) => {
    const goToDetails = ()=>{
        history.push(`/students/${studentInfo.id}`)
    }

    if (studentInfo) {
        return <div className="alert alert-primary" style={{cursor:"pointer"}} onClick={goToDetails}>
            <h4>
                {studentInfo.name}
            </h4>
        </div>
    }
}
export default Student