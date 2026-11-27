import icon from './icons.tsx'

const ButtonProps = {
  
  default: `bg-purple-600 
  text-white font-bold 
  px-8 py-4 rounded-xl 
  transition-colors
  hover:bg-purple-400
  m-2`,

  loading: `bg-violet-800 
  text-white font-bold 
  px-8 py-4 rounded-xl 
  transition-colors
  m-2`


}

function Default() {
  return (
    <div>
      <button className={ButtonProps.default}>
         {icon.dice} Roll Dice
      </button>
    </div>
  )
}

function Loading() {
  return (
    <div>
      <button className={ButtonProps.loading}>
         {icon.spinner} Rolling Dice...
      </button>
    </div>
  )
}

function Button() {
    return (
        <div className="bg-red-500 justify-center items-center flex flex-col">
            <Default/>
            <Loading />
        </div>

    )
}

export default Button
