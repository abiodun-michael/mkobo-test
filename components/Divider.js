

const Divider = ({...rest})=>{

    return(
        <>
            <div className="divider" {...rest}/>

            <style jsx>{`
                .divider{
                    height:1px;
                    background:#0047CC;
                    margin-top:41px;
                    opacity:0.2
                }
            
            `}</style>
        </>
    )
}

export default Divider