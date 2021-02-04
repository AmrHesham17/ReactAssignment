import StudentsList from '../containers/students-list'
import Search from '../containers/search'
const Home = ({history})=>{
    return <div>
        <Search/>
        <StudentsList history={history}/>
    </div>

}

export default Home