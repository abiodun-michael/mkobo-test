import "public/css/global.css"

const App = ({Component, pageProps})=>{

  
    const getLayout = Component.getLayout || (page => page)
    
    return getLayout(
        <Component {...pageProps}/>
    )
    
}

export default App