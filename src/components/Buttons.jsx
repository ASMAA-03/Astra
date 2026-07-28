function Button({text}) {
  return (
    <>
      <button className="bg-white text-black px-6 py-3 rounded-full hover:bg-gray-200 transition">
      {text}
      </button>
    </>
  )
}
export default Button;