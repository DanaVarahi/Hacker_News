import ArticleComment from './ArticleComment'
const ArticleDetail = ({title, url, articleId, getComments, commentIds, comments}) => {
    

    
    return (
        <>
        <p><a href={url}>{title}</a></p>
        <ArticleComment></ArticleComment>
        <button onClick={() => getComments(commentIds, articleId)}>Show Comments</button>
        {comments ? <article dangerouslySetInnerHTML={{__html:comments[0].text }}></article> : null}
        </>
    )
}

export default ArticleDetail