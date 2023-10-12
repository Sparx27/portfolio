
const StackBox = ({ image, name }) => {

  return (
    <div className='img-card'>
      <img src={image} alt={name} />
      <p className='img-txt'>{name}</p>
    </div>
  )
}

export default StackBox