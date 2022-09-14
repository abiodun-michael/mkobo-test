import AnalyticCard from "./Analytic";

const {Item} = AnalyticCard
export const Analytic = ()=>{
    return(
        <AnalyticCard>
            <Item title="Avalaible Balance" data={6390.68} type="primary"/>
            <Item  title="Car Purchase Plan" data={6390.68} type="secondary" interest={20000}/>
            <Item title="Birthday Plan" data={6390.68} type="tertiary" interest={20000}/>
        </AnalyticCard>
    )
}