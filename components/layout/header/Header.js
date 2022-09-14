import { Bell } from "icons"

const Header = ({children})=>{

    return(
        <>
        <header>
            
        {children}
        </header>
        <style jsx>{`
            header{
                position:fixed;
                top:41px;
                left:0;
                right:35px;
                display:flex;
                justify-content:flex-end;
            }
        
        `}</style>
        </>
    )
}



export default Header



