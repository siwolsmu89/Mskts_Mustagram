import React, {Component} from 'react';
import ImageLayer from "../piece/ImageLayer"
import TextLayer from "../piece/TextLayer"
import CommentLayer from "../piece/CommentLayer"

class ArticleScroll extends Component {
    render() {
        return (
            <div className="part part-wrapper part-article-scroll">
                <ImageLayer/>
                <TextLayer/>
                <CommentLayer/>
            </div>
        );
    }
}

export default ArticleScroll