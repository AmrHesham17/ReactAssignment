import { useEffect, useRef } from 'react'
import { getStudents } from '../actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

const Search = ({getStudents}) => {
    const name = useRef()
    const searchByName = () => {
        getStudents(name.current.value)
    }
    useEffect(()=>{
        searchByName()
    })
    return <div className="search-container" style={{
        width: "65%",
        margin: "0 auto"
    }}>
        <div className="col text-center">
            <div className="form-group">
                <input ref={name} className="form-control rounded-pill text-center mt-4" type="text"
                placeholder="Search by Student Name" onChange={searchByName}/>
            </div>
        </div>
    </div>
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ getStudents }, dispatch)
}
export default connect(null, mapDispatchToProps)(Search)