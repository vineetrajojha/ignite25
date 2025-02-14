const Card = ({title, imgLink} : {title: string, imgLink: string}) => {
  return (
    <div className='relative max-w-xs rounded-xl h-80 border-gray-400 shadow-2xl overflow-hidden m-auto transition-all duration-700 hover:scale-110'>
      <img src={imgLink} alt="" className='w-full h-full object-cover object-center' />
      <div className='absolute bottom-0 text-center bg-black bg-opacity-70 w-full py-2 text-white text-base'>
        {title}
      </div>
    </div>
  )
}

export default Card
