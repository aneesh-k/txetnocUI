import React, { Component } from 'react'


export default class Post extends Component {
    constructor() {
        super();
        this.state = {
            title: "",
            description: "",
            posts: []
        }
        this.getInputs = this.getInputs.bind(this)
        this.addPost = this.addPost.bind(this)
        //this.getPosts = this.getPosts.bind(this)


    }
    statusMessage = null;

    getInputs(events) {
        this.setState({
            title: events.target.value,
            description: events.target.value
        })
    }

    // async getPosts(){
    //     let fetchdata = await fetch("http://localhost:3001/posts/");
    //     let data = await fetchdata.json();
    //     this.setState({
    //         posts: data
    //     })
    // } 

    async componentDidMount(){
        let fetchdata = await fetch("http://localhost:3001/posts/");
        let data = await fetchdata.json();
        this.setState({
            posts: data
        })
    }

    addPost(event) {
        event.preventDefault();
        let schema = {
            title: this.state.title,
            description: this.state.description
        }

        let data = JSON.stringify(schema)
        fetch("http://localhost:3001/posts", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
              },
            body: data
        })
        .then(result => result.json())
        .then(data => {
            this.statusMessage = data
        })
        .catch(err => {
            this.statusMessage = err
        })

    }

    render() {
        let data;
        let posts;
        if (this.state.posts.length === 0 || this.state.posts === undefined) {
            // posts = this.state.data.map(r => (
            //     <li>
            //        { r.title}
            //     </li>
            // ))
            posts = <div>No data</div>
        }else{
            posts = this.state.posts.map(r => (
                    <li>
                       { r.title}
                    </li>
                ))
        }
        if (this.state.title.length === 0) {
            data = true
        } else {
            data = false
        }
        return (
            <div className="container">
                <textarea onChange={this.getInputs} className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Add posts here"></textarea>
                <button disabled={data} onClick={this.addPost} type="button" className="btn btn-primary btn-lg btn-block">Add Post</button>
                {this.statusMessage}
                {posts}

            </div>
        )
    }
}