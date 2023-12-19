

export default async function page({params}:{params: {book:string}}) {
    const bk = await fetch(`https://simple-books-api.glitch.me/books/${params.book}`)

    const data = await bk.json()
    console.log(data)


  return (
    <div className="grid grid-rows-[30%,70%] justify-center">
    <p key={data.id} className="">

    <div className="bg-slate-300 mt-6 rounded-3xl w-96 p-4">
          <p className="font-bold text-center text-blue-800">Book Id=={">"} {data.id}</p>
          </div>
        
          <div className="bg-slate-300 mt-6 rounded-3xl w-96 p-4">
          <p className="font-bold">Book name=={">"} {data.name}</p>
          </div>
            <div className="bg-slate-400 mt-1 rounded-3xl w-96 p-4">
            <p className="font-bold">Author Name=={">"}{data.author}</p>
            </div>
            <div className="bg-slate-400 mt-1 rounded-3xl w-96 p-4">
            <p className="font-bold">Book Type=={">"}{data.type}</p>
            </div>
            <div className="bg-slate-400 mt-1 rounded-3xl w-96 p-4">
            <p className="font-bold">Book Type=={">"}{data.price}</p>
            </div>
            <div className="bg-slate-400 mt-1 rounded-3xl w-96 p-4">
            <p className="font-bold">Book Stock=={">"}{data.awailable}</p>
            </div>
            
        
    </p>
    </div>

    









  )
}
