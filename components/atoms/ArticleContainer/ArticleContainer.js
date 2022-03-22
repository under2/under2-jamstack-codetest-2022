import React from "react"
import PropTypes from "prop-types"

ArticleContainer.propTypes = {
    children: PropTypes.node,
}

export function ArticleContainer({ children, padding = "md" }) {
    
    const variants = {
        padding: {
            md: "py-16 md:py-32",
            mdTopOnly: "pt-16 md:pt-32",
            none: ""
        }
    }

    const paddingClassName = variants.padding[padding]
        
        return (
        <div className={`grid mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 box-content gap-6 ${paddingClassName}`}>
            {children}
        </div>
    )
}
