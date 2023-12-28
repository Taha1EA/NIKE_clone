
const Buttons = ({label,iconURL,backgroundColor,borderColor,textColor,fullWidth}) => {
  return (
    <button className={`flex justify-center gap-2 px-5 py-3 border font-montserrat text-lg leading-none rounded-full 
    ${backgroundColor ? `${backgroundColor} ${borderColor} ${textColor}`:' bg-coral-red text-white border-coral-red'} 
    ${fullWidth && 'w-full' }`}>
        {label}
        {iconURL && <img src={iconURL} className="ml-2 rounded-full w-5 h-5 "/>}
    </button>
  )
}

export default Buttons