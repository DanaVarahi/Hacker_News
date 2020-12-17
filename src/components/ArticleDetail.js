import ArticleComment from './ArticleComment'
const ArticleDetail = ({title, url, commentIds}) => {
    // getCommentIds({commentIds})
    
    return (
        <>
        <p><a href={url}>{title}</a></p>
        <ArticleComment></ArticleComment>
        </>
    )
}

export default ArticleDetail