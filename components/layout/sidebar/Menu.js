import Link from "next/link"


const Menu = ({children, ...rest})=>{

    return(
        <>
            <ul id="sidebar-menu" {...rest}>
                {children}
            </ul>

            <style jsx>{`
                #sidebar-menu{
                    margin-top:52px;
                    list-style:none;
                }
            
            `}</style>
        </>
    )
}


Menu.Item = ({isLink = true, icon:Icon=()=><></>, label, target="#", active, ...rest})=>{

    return(
        <>
            <li>
                <Link href={target}>
                    <a className={`${active ? 'active':''}`}  { ...rest}>
                        <Icon width={24} height={24}/> 
                        <span>{label}</span>
                    </a>
                </Link>
            </li>

            <style jsx>{`
                li a{
                    font-size:1rem;
                    color:var(--gray);
                    height:40px;
                    text-decoration:none;
                    font-weight:400;
                    padding:8px 9px;
                    display:flex;
                    gap:20px;
                    align-items:center;
                    border-radius: 5px 0px 0px 5px;
                    transition:color 300ms;
                }

                li a > *{
                    vertical-align:middle;
                }
               
                li span{
                    display:inline-block;
                }

                li:not(:first-child){
                    margin-top:${isLink ? '21px':0}
                }

                .active{
                    background:var(--white);
                    color:var(--primary-color) !important;
                }
            `}</style>
        </>
    )
}


export default Menu