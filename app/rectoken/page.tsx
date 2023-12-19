'use client'
import getToken from "../api/page"
// let url = 'https://simple-books-api.glitch.me/api-clients'

export default function recToken() {
  
  // const value = formm.name;
  
  // console.log(value)
    const tokenData = getToken()
    const a = tokenData
    console.log(a)
    let userData = {
      clientName:'',
      email: ''
  }
// const res = await fetch(url,{
    //       method:'POST',
    //       headers:{
    //           'Content-Type': 'application/json'
    //       },
    //       body:JSON.stringify(userData)
    //   })
    //   if(!res.ok){
    //       throw new Error(`Could not fetch, status: ${res.status}`)
    //   }
    //   const data = await res.json()
    //   console.log(data)
  
      return(
        <>
           <div>
            

            {/* <h1>{data.accessToken}</h1> */}
            <h1>{a}</h1> 
            
        </div>
        </>
       
      )
     
     
  
  }



