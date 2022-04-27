
const GifList = ({ data, handleImageClick }) => {

  return (

    data.map((gif, index) => (
        <img 
            key={index}
            className="gif" 
            src={gif.gif} 
            alt={gif.title}
            onClick={handleImageClick}
        />
    ))
  )
}

export default GifList