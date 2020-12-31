import React from 'react';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';
import get_data from '../actions/send_data';

class Posts extends React.Component{
    state={
        search:'',
        data:[]
    }
    componentDidMount(){
        this.props.get_data().then(a=>{
            this.setState({
                data: this.props.posts
            })
        })
    }
    handleChange=(e)=>{
        const y = this.props.posts.filter(a=>{
            if( a.title.includes(e.target.value) || a.id == e.target.value ){
                return true
            }
        })
        this.setState({
            data:y
        })
    }
    display_posts = ()=>{
        if(this.state.data.length>0){
            return this.state.data.map(a=>{
                return (
                    <div key={a.id}>
                        <NavLink to={`/${a.id}`}><h3>{a.id} - {a.name}</h3></NavLink>
                    </div>
                )
            })
        }else{
            return null
        }
    }
    render(){
        return(
            <div>
                <h1>List of posts</h1>
                <form>
                    Search Posts : <input type='text' onChange={(e)=>{this.handleChange(e)}} />
                </form>
                {this.display_posts()}
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return {posts: state}
}

export default connect(mapStateToProps, {get_data: get_data})(Posts)