import React from 'react'
import Flickity from 'react-flickity-component'

const flickityOptions = {
    initialIndex: 1,
    wrapAround: true,
    groupCells: 2,
    cellAlign: 'center',
    contain: true,
    groupCells: true,
    prevNextButtons: false,
    pageDots: false,
    pauseAutoPlayOnHover: false,
    selectedAttraction: 0.013,
    friction: 0.3
}

const BANNERS = [
    {
        src: "/banner2.jpg",
        alt: ""
    },
    {
        src: "/banner1.jpg",
        alt: ""
    },
    {
        src: "/banner3.jpg",
        alt: ""
    },
    {
        src: "/banner4.jpg",
        alt: ""
    },
]

export default function HomeBanners() {
    const [ banners, setBanners ] = React.useState()
    React.useEffect(() => {
        setBanners(BANNERS)
    }, [])
    return (
        <div className="">
            <Flickity
                className={'carousel'}
                elementType={'div'}
                options={flickityOptions}
                // disableImagesLoaded={false}
                // reloadOnUpdate={true}
                // static={false}
            >
                {banners && banners.map((item, index) =>
                    <div key={index} className="carousel-cell">
                        <img alt={item.alt} src={item.src} />
                    </div>
                )}
            </Flickity>
        </div>
    )
}