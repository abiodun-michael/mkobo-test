import Avatar from "./Avatar"

const Navigation = ()=>{
    return(
        <>
            <nav>
                 <Avatar />
            </nav>

            <style jsx>{`
                nav{
                    height:55px;
                    min-width:255px;
                    background:var(--primary-color);
                    border-radius:5px;
                    display:flex;
                    align-items:center;
                    padding:0 20px;
                }

                #notification{
                    width:40px;
                    height:40px;
                }
            
            `}</style>
        </>
    )
}

export default Navigation
