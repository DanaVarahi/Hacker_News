const FilterList = ({articles, onFilterTypeChange}) => {
    
    const articleTypes = articles.map(article => article.type)
    const uniqueArticleTypes = [...new Set(articleTypes)]

    const options = uniqueArticleTypes.map(type => {
        return <option key={type} value={type}>{type[0].toUpperCase() + type.substring(1)}</option>
    }) 

    return (
        <select onChange={(evt) => onFilterTypeChange(evt.target.value)}>
            <option disabled selected >Filter by type...</option>
            {options}
        </select>
    )
}

export default FilterList