const App = () => {
    return (
      <div className="h-screen overflow-hidden w-full ">
          <div className="flex flex-row justify-between h-full ">
              <div className="mt-0 flex flex-col justify-center items-center  h-full w-1/2 ">
                <div className="flex flex-col justify-center items-center ">

                  <h1 className="font-sans text-8xl text-[#101A1CD6] self-start">LOGIN</h1>
                
                  <input
                      placeholder="Username"
                      className="border-2 w-80 h-10 mt-5 rounded-md"
                      />
                  <input
                      placeholder="Password"
                      className="border-2 w-80 h-10 mt-5 rounded-md"
                      />
  
                  <button className="w-48 h-10 bg-[#101A1CD6] text-white mt-5 rounded-md self-start">
                      LOGIN
                  </button>
  
                  <div className="flex items-center w-full mt-5">
                      <div className="flex-grow border-sky-400 border-t"></div>
                      <span className="mx-4">OR</span>
                      <div className="flex-grow border-sky-400 border-t"></div>
                  </div>
                 
  
                  <div className="flex flex-row justify-center items-center gap-10 mt-5">
                      <img src="/image 1.png" alt="" />
                      <img src="/image 2.png" alt="" />
                  </div>
                  <div className="mt-5 self-start text-[#101A1CA3]">
                    <p>Not yet registered , Click here to sign up</p>
                  </div>
              </div>
                      </div>
              
              <div className="w-1/2 h-full">
                  <img
                      src="image 3.png"
                      alt="papağan"
                      className="object-cover rounded-l-[200px] w-full h-full"
                  />
              </div>
              </div>
          
      </div>
    );
  };
  
  export default App;
  