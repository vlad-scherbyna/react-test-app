import React, {Component} from 'react'
import { connect } from 'react-redux';
import {fetchPostData} from "../../actions/post";
import Post from "../Post/Post";
import './Posts.css'
import Loader from "../UI/Loader/Loader";

class Posts extends Component{
    renderPosts() {
        return this.props.posts.map(post => {
            return (
                <Post
                    key={post.id}
                    title={post.title}
                    body={post.body}
                />
            )
        })
    }

    componentDidMount() {
        this.props.fetchPostData()
    }

    render() {
        return (
            <div className="Posts">
                {
                    this.props.loading && this.props.loading.length !== 0
                        ? <Loader/>
                        : this.renderPosts()
                }
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        posts: state.posts.posts,
        loading: state.posts.loading
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchPostData: () => dispatch(fetchPostData())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Posts)