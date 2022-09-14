import {Naira,Invisible,WhiteInvisible} from 'icons'

const Analytic = ({children})=>{

    return(
        <>
          <div className='analytic'>
            {children}
          </div>

          <style jsx>{`
            .analytic{
                display:flex;
                gap:41px;
            }
          
          `}</style>
        </>
    )
}


Analytic.Item = ({title,interest, data, type,icon, ...rest})=>{

    return(
        <>
             <div className={`analytic-card ${type}`} {...rest}>
                <img className="bg-icon" src="/images/svg/mask.svg" />
                <div className="analytic-card-top">
                    <p className="analytic-card-top-title">{title}</p>
                    {interest ? null: <span className="tier">Tier 1</span>}
                </div>
                    <div className="card-data">
                    <div className='naira'><Naira width={9}/></div>
                    <h1 className="data">{data?.toLocaleString()}</h1>
                    {type === 'primary' ? <WhiteInvisible width="29px" height={25}/>:<Invisible width={15} height={13}/>}
                </div>
                
               {interest ?  <>
                <div className='divider'></div>
                <p className='interest'>Interest as at today:  : ₦{interest.toLocaleString()}</p>
               </>:null}
            </div>

            <style jsx>{`
                .analytic-card{
                    height:140px;
                    width:325px;
                    border-radius:5px;
                    background-size:cover;
                    position:relative;
                    padding:9px 14px;
                    box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.1);
                }

                .bg-icon{
                    position:absolute;
                    right:0;
                    top:20px;
                }

                .analytic-card-top{
                    display:flex;
                    justify-content:space-between;
                    height:35px;
                }

                .analytic-card-top-title{
                    font-size:0.857rem;
                }
           
                .analytic-card-top .tier{
                    display:inline-block;
                    height:34px;
                    width:73px;
                    background-color:var(--white);
                    border-radius:4px;
                    display:flex;
                    align-items:center;
                    justify-content:center;
                    color:var(--primary-color)
                }

                .card-data{
                    display:flex;
                    align-items:center;
                }
                .data{
                    font-size:2.571rem;
                    line-height: 4.214rem;
                    margin-right:14px;
                    line-height:1.2
                }

                .naira{
                    font-size:0.867rem;
                    align-self:start;
                    margin-right:2px;
                }

                .primary{
                    background: var(--primary-color);
                    color:#ffffff;
                }

                .primary .analytic-card-top-title{
                    color:rgba(255, 255, 255, 0.5);
                }

                .primary .analytic-card-top-title{
                    color:rgba(255, 255, 255, 0.5);
                }

                .secondary{
                    background: #D4D4FF;;
                    color:#263238;
                }

                .secondary .analytic-card-top-title{
                    color:rgba(38, 50, 56, 0.5);
                }

                .tertiary{
                    background: #FFD4DF;;
                    color:#263238;
                }

                .tertiary .analytic-card-top-title, .interest{
                    color:rgba(38, 50, 56, 0.5);
                }

                .divider{
                    height:1px;
                    background-color:#FFFFFF;
                    opacity:0.2;
                    margin-bottom:13px;
                }

                .interest{
                    font-weight:600;
                }
            
            `}</style>
        </>
    )
}

export default Analytic