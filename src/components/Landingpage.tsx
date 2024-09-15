export default function Landingpage() {
  return (
    <div className="flex flex-row bg-slate-950 text-white h-screen">
        <div className="flex justify-center items-center">
            <img src="../src/assets/xlogo.svg" alt="" className="w-96 h-96" />
        </div>
        <div className="flex  flex-col items-center justify-center">
            <span>Happening now</span>
            <span>join today.</span>
            <button>signup with google</button>
            <button>signup with apple</button>
            <span>
                <span></span>
                <p>or</p>
                <span></span>
            </span>
            <button>create account</button>
            <span>By signing up you are agree to the term and conditions and privacy policy.including cookie use</span>
            <div>
                <p>already have an account ?</p>
                <button>signin</button>
            </div>
        </div>
    </div>
  )
}
