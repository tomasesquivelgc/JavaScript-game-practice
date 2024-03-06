export default function Character() {
  return (
    <div className="flex justify-center">
      <img src="/figure.png" alt="character" className="flex align-middle justify-center h-96" />
      <div className="absolute flex flex-col justify-center items-center">
        <img src="/hairstyles/hair-1.png" alt="hair" className="h-14" />
        <img src="/top/t-shirt-1.png" alt="shirt" className="h-32" />
        <img src="/bottom/jean-1.png" alt="jean" className=" h-52" />
      </div>
    </div>
  )
}