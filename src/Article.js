import React from 'react';
import './Article.css';
import articles from './articles';

export default function Article(props) {
    const id = props.match.params.id;
    return(
        <div>
            {articles[id]}
        </div>
    )
}