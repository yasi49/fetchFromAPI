"use client"

import router, { useRouter } from 'next/router'
import recToken from '../rectoken/page';
export default async function getToken (){
 
  const handle = async (e: {
    preventDefault(): any; target: {
      name: {
          value: any;
      };
      emailAddress: {
          value: any;
      };
      reset: () => void;
  }; 
})=>{
      e.preventDefault();

    let formm = {
     name: e.target.name.value,
    email: e.target.emailAddress.value,
    }
    // let data = await fetch(url)
    // data = await data.json()
    // console.log(form)
    e.target.reset()
    console.log(formm.name)
    console.log(formm.email)
    // const formObject = form.name
    // const formObject1 = form.email
    // return (formm)
    }
        return (
            <>
          <div>
            <form className='flex flex-col gap-y-2' onSubmit={(e) => handle(e)} >
              <div>
              
                <input autoComplete="on" type="text" name="name" placeholder="Enter Name" />
              </div>

              <div>
                
                <input autoComplete="email" type="email" name="emailAddress" placeholder="Enter Email"/>
              </div>
              
              <button type='submit' >Submit</button>
              
            </form>
            
          </div>
          </>
        );



      
        
     }
// console.log("data is here")






