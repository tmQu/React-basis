import Card from './component/Card'

function App()
{
    var layout = {
        width: '50%',
        margin: 'auto',
        display: 'flex',
        justifyContent: 'space-around'
    }

    var center = {
        textAlign: 'center'
    }
    return (
        <div>
            <h1 style={center}>Task: Add three Card Elements</h1>
            <div style={layout}>       
                <Card h2='This is first card' h3='This is first card'/>
                <Card h2='This is second card' h3='This is second card'/>
                <Card h2='This is third card' h3='This is third card'/>
            </div>
        </div>


    );
}

export default App