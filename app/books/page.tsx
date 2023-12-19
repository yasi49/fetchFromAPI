
import Link from "next/link"

export default async function allBooks() {
  const bk = await fetch('https://simple-books-api.glitch.me/books')

  const data = await bk.json()
  console.log(data)
    
    return (
      <div className='text-center mt-20'>
      <h1 className=' font-bold '>All books with info</h1>

      {data.map((book: {id: string, type: string, name: string, available: boolean})=>{
        return (
            <>
            <div className="grid grid-rows-[30%,70%] justify-center">
            <p key={book.id} className="">
                <Link href={`/books/${book.id}`}>
                  <div className="bg-slate-300 mt-6 rounded-3xl w-96 p-4">
                  <p>Book Type=={">"} {book.type}</p>
                  </div>
                    <div className="bg-slate-400 mt-1 rounded-3xl w-96 p-4">
                    <p className="font-bold">Book Name=={">"}{book.name}</p>
                    </div>
                    <div className="bg-slate-400 mt-1 rounded-3xl w-96 p-4">
                    <p className="font-bold">Book Stock=={">"}{book.available}</p>
                    </div>
                    
                </Link>
            </p>
            </div>
         
            </>
        )
        })
      }

    </div>
    )
  }