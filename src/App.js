import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Navbar, NavItem, Row, Col, Card, Icon } from 'react-materialize';
import ZekeApi from './services/ZekeApi';

class App extends Component {

  constructor(props) {
    super(props);

    this.api = new ZekeApi();
    this.state = {
       info: { name: "", description: "" },
       pages: [{title: {rendered: ""}, content: {rendered: ""}}],
       posts: []
    };
  }

  
  componentWillMount() {
    var self = this;
    
    this.api.getInfo(function(info) {
      console.log("site info", info);
      self.setState({info: info.data});
    });

    this.api.getPages(function(resp) {
      console.log("pages", resp);
      self.setState({ pages: resp.data});
    });

    this.api.getPosts(function(resp) {
      console.log("posts", resp);
      self.setState({ posts: resp.data });
    });
  }

  renderWordpressHTML(html) {
    return {__html: html }
  }

  render() {
    return (
      <div className="App">
        <Navbar right className="green">
          <NavItem href="#About">About</NavItem>
          <NavItem href='#Blog'>Blog</NavItem>
        </Navbar>
        <header className="App-header">
          <h1>{this.state.info.name}</h1>
          
          <img src="/images/zeke.jpg" alt="Me" />
          <p>
            {this.state.info.description}
          </p>
          <p>
            <a href="#">LinkedIn</a> | <a href="#">Twitter</a> | <a href="#">Github</a>
          </p>
        </header>
        <h1></h1>
        <Row id="About">
          <Col m={2}></Col>
          <Col m={8}>
            <Card m={6} s={12} title={this.state.pages[0].title.rendered}>
              <div dangerouslySetInnerHTML={this.renderWordpressHTML(this.state.pages[0].content.rendered)} />
              
            </Card>
          </Col>
          <Col m={2}></Col>
        </Row>
        <h1></h1>
        <Row id="Blog">
          {this.state.posts.map(post => {
            return <Col key={post.id} m={8} className="offset-m2">
              <h3 dangerouslySetInnerHTML={this.renderWordpressHTML(post.title.rendered)} />
              <div style={{textAlign: 'left'}} dangerouslySetInnerHTML={this.renderWordpressHTML(post.content.rendered)} />
              <h1></h1>
            </Col>
          })}
        </Row>
      </div>
    );
  }
}

export default App;
