import { Layout,Analytic, Divider, Tabs } from "components"
import { Invisible, Naira } from "icons"


const {Item} = Analytic
const {Header} = Tabs
const {HeaderItem} = Header
const Index = ()=>{

    return(
        <>
        <h1 style={{marginBottom:22, fontSize:22, color:'var(--text-color)'}}>Hello Bennedict,</h1>
        <Analytic>
            <Item title="Avalaible Balance" data={6390.68} type="primary"/>
            <Item  title="Car Purchase Plan" data={6390.68} type="secondary" interest={20000}/>
            <Item title="Birthday Plan" data={6390.68} type="tertiary" interest={20000}/>
        </Analytic>
        <Divider style={{marginBottom:25}}/>
        <Tabs>
            <Header data={[]}/>

        </Tabs>
        </>
    )
}


Index.getLayout = function getLayout(page){
    return <Layout>{page}</Layout>
}

export default Index