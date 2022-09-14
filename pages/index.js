import { Layout,Analytic, Divider } from "components"

const Index = ()=>{

    return(
        <>
        <h1 style={{marginBottom:22, fontSize:22, color:'var(--text-color)'}}>Hello Bennedict,</h1>
        <Analytic />
        <Divider style={{marginBottom:25}}/>
        </>
    )
}


Index.getLayout = function getLayout(page){
    return <Layout>{page}</Layout>
}

export default Index