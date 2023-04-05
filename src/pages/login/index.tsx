// import { useEffect, useState } from 'react';
// import jwt_decode from 'jwt-decode';
// import Image from 'next/image';
function Login() {
        // const [ user, setUser ] = useState({});
        // function handleCallbackResponse(response: any) {
        //     setUser(jwt_decode(response.credential));
        // }
        // useEffect(() => {
        //     google.accounts.id.initialize({
        //         client_id: "804061669567-vcop39e0hsrhmp05bfb6vksu1ogoithj.apps.googleusercontent.com",
        //         callback: handleCallbackResponse
        //     });
        //     google.accounts.id.renderButton(
        //         document.getElementById('signin'),
        //         {theme: "outline", size: "large"}
        //     );
        // })
        return(
            <>
                <div id="signin"></div>
                {/* {
                    user &&
                    <img src={user.picture} width="200px" height="200px" alt={user.name}/>
                } */}
            </>
        )
}

export default Login;