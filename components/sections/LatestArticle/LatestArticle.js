import React from "react";
import PropTypes from "prop-types"
import { ArticleContainer } from "../../atoms/ArticleContainer"
import { Articles } from "../../atoms/Articles"
import { Heading } from "../../atoms/Heading"

LatestArticle.propTypes = {
    children: PropTypes.node,
}

export function LatestArticle({ latestArticles }) {

    return (
        <section className="article-contain">
            <ArticleContainer>
            <header className={`bg-gray-100`}>
                <Heading className="article-heading"> The latest from Mula</Heading>
                <div className="container"> 
                    {latestArticles.map(latestArticle => <Articles 
                        key={latestArticle._id}
                        src={latestArticle.coverImage} 
                        alt={latestArticle._id} 
                        publishDate={latestArticle.publishDate}
                        heading={latestArticle.heading}
                        />
                    )}
                </div>
            </header>
            </ArticleContainer>
        </section>
    )
}
