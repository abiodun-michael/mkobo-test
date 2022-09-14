import Sidebar from "./Sidebar";
import Logo from './Logo'
import Menu from "./Menu";
import { Home,MKolo,EarlyPay,Paybills,Debitcard,Settings, Profile,Chat,Faq } from "icons";

const {Item} = Menu
const Index = ()=>{

    return(
        <Sidebar>
            <Logo />
            <Menu>
                <Item label="Dashboard" icon={Home} active/>
                <Item label="MKolo" icon={MKolo}/>
                <Item label="Early Pay" icon={EarlyPay}/>
                <Item label="Pay Bills" icon={Paybills}/>
                <Item label="Debit Cards" icon={Debitcard}/>
                <Item label="Profile" icon={Profile}/>
                <Item label="Settings" icon={Settings}/>
            </Menu>
            <p style={{
                fontWeight:700, marginBottom:9, marginTop:57
            }}>Help &amp; Support</p>
            <Menu style={{marginTop:0}}>
                <Item isLink={false} label="FAQ's" icon={Faq} style={{marginTop:0, fontSize:12, color:"var(--primary-color)"}}/>
                <Item isLink={false} label="Talk to someone" icon={Chat}  style={{marginTop:0, fontSize:12, color:"var(--primary-color)"}}/>
            </Menu>

        </Sidebar>
    )
}

export default Index