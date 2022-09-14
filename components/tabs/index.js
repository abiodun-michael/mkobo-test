

const Tabs = ({children})=>{

    return(
        <>
        {children}
        </>
    )
}

Tabs.Header = ({children})=>{

    return(
        <>
        <ul className="tab-header">
            {children}
        </ul>
        <style jsx>{`
            .tab-header{
                background:#EFF2F8;
                border-radius:10px;
                height:36px;
                padding:6px 9px;
            }
        
        `}</style>
        </>
    )
}

Tabs.Header.HeaderItem = ()=>{

    return(
        <>
            <li>
                1
            </li>
        </>
    )
}

export default Tabs