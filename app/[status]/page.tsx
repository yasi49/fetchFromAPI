

export default async function status() {
    const books = await fetch('https://simple-books-api.glitch.me/status')
  
    const data = await books.json()
    console.log(data)
    return (
      <div className="text-center mt-12">
        <ul>
          <li className="text-3x1 font-bold">
            <h1 className="text-3x1 font-bold">{data.status}</h1></li>
    </ul>
      </div>
    )
     
    
  }
  