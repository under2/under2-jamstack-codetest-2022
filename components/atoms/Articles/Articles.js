import React from "react"
import PropTypes from "prop-types"
import Image from 'next/image'


Articles.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
}

export function Articles({ src, alt, publishDate, heading}) {
        
    const articleDate = (arg) => {
        const newDate = new Date(arg);
        const latestdate= newDate.toDateString();
        return latestdate;
    }

    return (
        <div className="article-container"> 
            <div className="article-image-header"> 
                <Image
                    className = "article-image"
                    src={src}
                    alt={alt}
                    width={500}
                    height={500}
                />
            </div>
            <div className="article-text"> 
                <p className = "article-date"> {articleDate(publishDate)}</p>
                <p className = "article-subtitle"> {heading}</p>
            </div>
        </div>
    )
}
