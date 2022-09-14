const Avatar = ()=>{

    return(
        <>
            <div className="avatar">
                <img src="/images/profile.png"/>
                <p>Benedict Ulinfo</p>
            </div>

            <style jsx>{`
                .avatar{
                    display:flex;
                    gap:18px;
                    align-items:center;
                    color:#ffffff;
                }

                .avatar img{
                    height:31px;
                    width:31px;
                    border-radius:50%;
                }
            `}</style>
        </>
    )
}

export default Avatar