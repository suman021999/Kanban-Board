

const MainPage = () => {
  const title="Hello"
  const id="BUS-1"
  const points="4"
  return (
    <>
      <div className=" border border-gray-300 rounded-lg px-2 m-2 bg-gray-50">
          <h2 className="text-base font-semibold py-2">{title}</h2>
          <div className="flex gap-4 justify-between py-2 text-gray-700">
            <p>{id}</p>
            <p>{points}</p>
           </div>
      </div>
    </> 
  )
}

export default MainPage
