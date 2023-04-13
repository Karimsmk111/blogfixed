import articles from "./article-content";
import ArticleList from "../components/ArtclesList";

const ArticlesListPage =()=>{
    return(
        <>
        <h1>Articles</h1>
        <ArticleList articles={articles}/>
        </>
    );
}

export default ArticlesListPage;