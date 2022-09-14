const Sidebar = ({children})=>{

    return(
        <>
            <aside>
                {children}
            </aside>

            <style jsx>{`
                aside{
                    width:200px;
                    position:fixed;
                    top:0;
                    left:0;
                    bottom:0;
                    padding-left:33px;
                    overflow-y:scroll;
                }

                aside::-webkit-scrollbar{
                    width:0;
                }
            `}</style>
        </>
    )
}

export default Sidebar