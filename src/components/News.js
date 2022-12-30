import React, { Component } from "react";
import NewsItem from "./NewsItem";

export default class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      category: "general",
      totalResults: 0,
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    this.props.setProgress(30);
    this.setState({ loading: true });
    this.props.setProgress(90);
    if (!this.props.newsData){
        this.setState({
            articles: '',
            hasArticals: false
        })    
    }
    else{
        this.setState({
          articles: this.props.newsData,
          totalResults: this.props.newsData.totalResults,
          loading: false,
          hasArticals: true,
        });
    }
    document.title = `Daily News - ${this.props.category}`;
    this.props.setProgress(100);
  };

  render() {
    return (
      <div style={{marginTop:'80px'}}>
          <div className="container">
              <h4>
              Top Headlines <span className="badge category-badge ">{this.props.category}</span>
              </h4>
          </div>
          <div className="container">
              <div className="row my-3">
              { 
              this.state.articles.map((element) => {
                  return (
                  <div className="col-md-3 my-2" key={element.url}>
                      <NewsItem
                      title={
                          element.title && element.title.length > 120
                          ? element.title.slice(0, 120) + "..."
                          : element.title
                      }
                      description={
                          element.description && element.description.length > 200
                          ? element.description.slice(0, 200) + "..."
                          : element.description
                      }
                      imageUrl={
                          element.urlToImage
                          ? element.urlToImage
                          : "https://via.placeholder.com/260X145.png?text=DailyNews"
                      }
                      newsUrl={element.url}
                      publishedAt={element.publishedAt}
                      source={element.source.name}
                      />
                  </div>
                  );
                  })
              }
              </div>
          </div>
        </div>
    );
  }
}
