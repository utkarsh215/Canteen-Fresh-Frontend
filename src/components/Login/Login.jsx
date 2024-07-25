import React from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
export default function Login(){
    const [data,setData] = React.useState({
        enroll_id:"",
        password:""
    })
    // const [loggedIn,setLoggedIn]=React.useState();
    const navigate=useNavigate()
    function handleChange(event){
        setData((prevData)=>{
            return{
                ...prevData,
                [event.target.name]:event.target.value
            }
        })
    }

    async function sendDate(){
        try {
           await axios.post("https://canteen-fresh-backend-1.onrender.com/login",data)
            .then(user=>{
                console.log(user);
                localStorage.setItem('token',user.data.token);
                const status=user.data.status;
                if(status == true){navigate("/menu",{state:true})}
                else{alert(user.data.status)}
            })
            .catch(err=>{console.log(err)});
        } catch (error) {
            console.log(err)
        }
    }
        
        function handleSubmit(event){
        event.preventDefault();
        sendDate();
    }
    return(<>
    {/* <h1>this is Login page</h1>
    <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enroll id" name="enroll_id" value={data.enroll_id} onChange={handleChange} />
        <input type="password" placeholder="Password" name="password" value={data.password} onChange={handleChange} /> 
        <button>Login</button>
    </form> */}

    <section>
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div className="w-full bg-white border-2 border-yellow-400 rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl">
                  Sign in to your account
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                  <div>
                      <label className="block mb-2 text-sm font-medium text-gray-900">Your Enrollment Id</label>
                      <input type="text" placeholder="Enroll id" name="enroll_id" value={data.enroll_id} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  outline-yellow-400"/>
                  </div>
                  <div>
                      <label class="block mb-2 text-sm font-medium text-gray-900">Password</label>
                      <input type="password" placeholder="••••••••" name="password" value={data.password} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  outline-yellow-400"/> 
                      {/* <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/> */}
                  </div>
                  <div className="flex items-center justify-between">
                      <div className="flex items-start">
                      </div>
                      <a href="#" className="text-sm font-medium text-primary-600 hover:underline ">Forgot password?</a>
                  </div>
                  <button className="min-w-[150px] py-3 px-4 text-sm font-semibold rounded text-white bg-yellow-400 hover:bg-slate-950 focus:outline-none w-full bg-primary-600 hover:bg-primary-700 focus:ring-4focus:ring-primary-300 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                        Sign in
                    </button>
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                      Don’t have an account yet? <Link to={"/register"} className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</Link>
                  </p>
              </form>
          </div>
      </div>
  </div>
</section>
    </>)
}