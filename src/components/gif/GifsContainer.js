import { useContext, useEffect, useState } from "react"
import { fetchGifs } from "../../helpers/getGifs";
import { SearchContext } from "../context/SearchContext"
import LoadingSpinner from "../loading/LoadingSpinner";
import Overlay from "../overlay/Overlay";
import GifList from "./GifList";

const GifsContainer = () => {

    const { search, counter, setCounter } = useContext(SearchContext);

    const [dataStatus, setDataStatus] = useState({
        loading: true,
        data: null,
    });

    const { loading, data } = dataStatus;

    const [overlayIsShown, setOverlayIsShown] = useState({
        isShown: false,
        gifUrl: '',
    });

    const {isShown, gifUrl} = overlayIsShown;

    const getGifs = async () => {
        setDataStatus({
            loading: true,
            data: null,
        });

        try {
            const gifs = await fetchGifs(search, counter);
            setDataStatus({
                loading: false,
                data: gifs,
            })
        } catch (error) {
            console.log(error);
            setDataStatus({
                loading: false,
                data: null,
            })
        }
    };

    const handleImageClick = ({target}) => {
        setOverlayIsShown({
            isShown: true,
            gifUrl: target.src,
        });
    }

    useEffect(() => {
        getGifs();
        localStorage.setItem('busqueda', search);
    }, [search, counter]);

    useEffect(() => {
        setCounter(1);
    }, [search])

    return (
        <div className="gif-list">
            <div className="title-container">
                <h2 className="gif-container__title">{search}</h2>
            </div>

            <div className="gif-grid animate__animated animate__fadeIn animate__faster">
                {
                    (loading) ? (
                        <LoadingSpinner />
                    ) : (
                        (data) ? (
                            <GifList 
                                data={ data }
                                handleImageClick={ handleImageClick }
                            />
                        ) : (
                            <p>No fue posible cargar los gifs</p>
                        )
                    )
                }

                {
                    (isShown) && <Overlay 
                        gifUrl = {gifUrl}
                        setOverlayIsShown = {setOverlayIsShown}
                    />
                }

            </div>


        </div>
    )
}

export default GifsContainer