import {useState , useEffect} from 'react';

export default httpClient => {
    const [error , setError] = useState(null)

            const reqInterceptors = httpClient.interceptors.request.use(request =>{
                setError(null);
                return request;
            })
            const resInterceptors = httpClient.interceptors.response.use(response => response , err=>{
                setError(err)
            })

            useEffect(()=>{
                return () =>{
                    httpClient.interceptors.request.eject(reqInterceptors);
                    httpClient.interceptors.response.eject(resInterceptors);
                }
            },[reqInterceptors , resInterceptors])

        const errorConfirmedHandler = () =>{
            setError(null);
        };

        return[error , errorConfirmedHandler]
}