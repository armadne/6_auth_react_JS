import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const App = () => {

    const[LoggedIn, SetloggedIn] = useState('');

    const[Username, SetUsername] = useState('');
    const[Password, SetPassword] = useState('');

    const[AccountCreated, SetAccountCreated] = useState('');

    const[CreateUsername, SetCreatedUsername] = useState('');
    const[CreatePassword, SetCreatedPassword] = useState('');



    const HandleLoggIn = () => {

        if(AccountCreated && Username === CreateUsername && Password === CreatePassword) {

            SetloggedIn(true)
            alert('Successfully LoggedIn')
        }

        else{

            alert('Incorrect Password Or Username')
        }


    };


    const HandleCreateAccount = () => {

        if(Username && Password) {

            SetAccountCreated(true)
            SetCreatedUsername(Username)
            SetCreatedPassword(Password)

            alert('Account Successfully Created !')
        }

        else{

            alert('You have to Choose A Username and A password !')
        }
    };


    const HandleLoggedOut = () => {

        SetloggedIn(false);
        alert('Successfully LoggedOut !')
    };


    return(

        <div>

            {LoggedIn ? (

                <div>

                <h1>Welcome {Username}</h1>

                <br/>
                <br/>

                <button onClick={HandleLoggedOut}>loggOut</button>

                </div>
            
            ):(

                <div>

                    {! AccountCreated ? (
                    
                    <div>

                        <h1> Create An Account </h1>

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
                        type='text'
                        placeholder='Enter Your Password'
                        value={Password}
                        onChange={(e) => SetPassword(e.target.value)}
                        />

                        <br/>
                        <br/>

                        <button onClick={HandleCreateAccount}>Create Account</button>


                    </div>

                    ):(

                        <div>

                            <h1>LoggIn OR Refresh the Page To Create An Account</h1>

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
                            type='text'
                            placeholder='Enter Your Password'
                            value={Password}
                            onChange={(e) => SetPassword(e.target.value)}
                            />

                            <br/>
                            <br/>

                            <button onClick={HandleLoggIn}>LoggIn</button>

                        </div>

                    )}
                </div>

            )}
        </div>

    )
    
}

ReactDOM.render(

    <React.StrictMode>
        <App/>
    </React.StrictMode>,

    document.getElementById('root')
)

