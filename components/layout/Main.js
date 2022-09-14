

const Main = ({children})=>{

    return(
        <>
            <main>{children}</main>
            <style jsx>{`
                main{
                    min-height:calc(100%- 127px);
                    background-color:var(--white);
                    margin-left:200px;
                    margin-top:127px;
                    border-radius:10px;
                    padding:21px 59px 21px 28px;
                }
            `}</style>
        </>
    )
}

export default Main