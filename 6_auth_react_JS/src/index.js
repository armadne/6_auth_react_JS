import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './style.css'

const App = () => {

    const[LoggedIn, SetLoggedIn] = useState('');

    const[Username, SetUsername] = useState('');
    const[Password, SetPassword] = useState('');
    const[Email, SetEmail] = useState('')


    const[AccountCreated, SetAccountCreated] = useState('');

    const[CreatedUsername, SetCreatedUsername] = useState('')
    const[CreatedPassword, SetCreatedPassword] = useState('');
    const[CreateEmail, SetCreateEmail] = useState('')



    const HandleLoggedIn = () => {

        if(AccountCreated && Email === CreateEmail && Username === CreatedUsername && Password === CreatedPassword) {


            alert('Account Successfully Created !')
            SetLoggedIn(true);
        }

        else{

            alert('ERROR: Indicate Your Correct Username And Password')

        }


    };


    const HandleCreateAccount = () => {

        if(Username && Password) {

            SetAccountCreated(true)
            SetCreateEmail(Email)
            SetCreatedUsername(Username)
            SetCreatedPassword(Password)

            alert('Successfully LoggedIn !');
            
        }

        else {

            alert('Error Mettre le Bon Username et Password')

        }

    };


    const HandleLoggedOut = () => {

        SetLoggedIn()
        alert('LoggedOut Successfully')
    };


    return(
        <div>
            { LoggedIn ? (

                <div>

                    <h1>Welcome {Username} !</h1>

                    <br/> <br/>

                    <button onClick={HandleLoggedOut}>LoggedOut</button>


                </div>

            ): (

                <div>

                    { ! AccountCreated ? (

                <div>

                    <h1>Create An Account</h1>

                    <input
                    type='text'
                    placeholder='test@gmail.com'
                    value={Email}
                    onChange={(e) => SetEmail(e.target.value)}

                    />

                    <br/>
                    <br/>

                    <input
                    type='text'
                    placeholder='Enter Your Username'
                    value={Username}
                    onChange={(e) => SetUsername(e.target.value)}

                    />

                    <br/>
                    <br/>

                    <input
                    type='password'
                    placeholder='Enter Your Password'
                    value={Password}
                    onChange={(e => SetPassword(e.target.value))}
                    />

<br/> <br/>

                    <button onClick={HandleCreateAccount}>Create Account</button>
                    </div> 


                    ):(
                
                        <div>
                        <h1>LoggIn Or Refresh The Page To Create An Account </h1>

                        <input
                        type='text'
                        placeholder='Enter Your Username'
                        value={Username}
                        onChange={(e) => SetUsername(e.target.value)}

                        />

                        <br/>
                        <br/>

                        <input
                        type='password'
                        placeholder='Enter Your Password'
                        value={Password}
                        onChange={(e) => SetPassword(e.target.value)}

                        />

                        <br/><br/>

                        <button onClick={HandleLoggedIn}>LoggIn</button>


                    </div>
                    )}

</div>

)}

</div>

    )}


ReactDOM.render(

    <React.StrictMode>
        <App/>
    </React.StrictMode>,

    document.getElementById('root')
)

