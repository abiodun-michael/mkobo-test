import Sidebar from './sidebar'
import Main from './Main'
import Header from './header'

const {Menu} = Sidebar
const {Navigation} = Header
const Layout = ({children})=>{

    return(
        <>
           <Header />
            <Sidebar>
                <Menu />
            </Sidebar>
            <Main>{children}</Main>
        </>
    )
}


export default Layout