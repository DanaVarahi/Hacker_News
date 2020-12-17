import ArticleDetail from './ArticleDetail'

const ArticleList = ({ articles, getComments, comments }) => {


    const ArticleDetailComponents = articles.map(article => {
        return (
            <ArticleDetail
                key={article.id}
                title={article.title}
                url={article.url}
                articleId={article.id}
                getComments={getComments}
                commentIds={article.kids}
                comments={comments[article.id]}
            ></ArticleDetail>
        )
    })

    return (
        <>
            {ArticleDetailComponents}
        </>
    )
}

export default ArticleList