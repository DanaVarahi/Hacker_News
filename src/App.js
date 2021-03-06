import './App.css';
import ArticleList from './components/ArticleList'
import {useState, useEffect, useMemo} from 'react';
import Header from './components/Header'
import FilterList from './components/FilterList'

function App() {
  
  const [articles, setArticles] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const [filterType, setFilterType] = useState("")
  const [comments, setComments] = useState({})
  const filteredArticles = useMemo(() => {
    const searchTermFilteredArticles = articles.filter(article => article.title.toLowerCase().includes(searchTerm.toLowerCase()))
    return searchTermFilteredArticles.filter(article => article.type.includes(filterType))
  }, [searchTerm, filterType, articles])
  
  useEffect(() => {
    fetch("https://hacker-news.firebaseio.com/v0/topstories.json")
    .then(res => res.json())
    .then(storyIds => storyIds.slice(0, 5).map(id => getItem(id)))
    .then(promises => Promise.all(promises))
    .then(articles => setArticles(articles))
    
  },[])

  
  const getItem = (id) => {
    return fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
    .then(res => res.json())
  }

  const getComments = (ids, articleId) => {
    Promise.all(ids.map( id => getItem(id)))
    .then(articleComments => setComments({...comments, [articleId]: articleComments}))
  }

  const handleSearch = (evt) => {
    setSearchTerm(evt.target.value)
  }

  const handleFilterTypeChange = (type) => {
    setFilterType(type)
  }

  return (
  <>
    <Header></Header>
      <div class="filters">
        <FilterList articles={articles} onFilterTypeChange={handleFilterTypeChange}></FilterList>
        <input 
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearch}>
        </input>
      </div>
    
    <ArticleList articles={filteredArticles} getComments={getComments} comments={comments}></ArticleList>
  </>
  );
}

export default App;

