export default function Signin() {
  return (
    <div>
        <div>
                <img src="../src/assets/xlogo.svg" alt="x logo" />
            </div>

            {/* <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                </div>
                <input type="text" id="email-address-icon" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Name" />
            </div> */}

            <div>
                <form action="">
                    
                    <input type="text" placeholder="email" />
                    <input type="text" placeholder="password" />
                    <label htmlFor="">Date of birth</label>
                    <label htmlFor="">This will not be shown publicly. Confirm your own age, even if this account is for a business, a pet, or something else.</label>
                    <input type="text" placeholder="Date of birth" />

                    {/* <span>
                        <select name="" id="">

                        </select>
                    </span> */}
                </form>
            </div>
            <div></div>
    </div>
  )
}
