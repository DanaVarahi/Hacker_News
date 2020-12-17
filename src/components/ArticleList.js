import ArticleDetail from './ArticleDetail'

const ArticleList = ({articles }) => {

    
    const ArticleDetailComponents = articles.map(article => {
        return (
            <ArticleDetail key={article.id} title={article.title} url={article.url} commentIds={article.kids} ></ArticleDetail>
        )
    })

    return (
        <>
            {ArticleDetailComponents}
        </>
    )
}

export default ArticleList