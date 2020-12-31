import React from 'react';
import get_data from '../actions/send_data';

import {connect} from 'react-redux';

class SinglePost extends React.Component{
    componentDidMount(){
        this.props.get_data();
    }
    display=()=>{
        return this.props.posts.map(a=>{
            if('/'+a.id ==this.props.history.location.pathname){
                return (
                    <div key={a.id}>
                        <div className='message_box'>
                            <h2>No. {a.id}</h2>
                            <p><span className='bold'>From:</span> {a.email}</p>
                            <p><span className='bold'>Subject:</span> {a.name}</p>
                            <p className='message'>{a.body}</p>
                        </div>
                    </div>
                )       
            }
        })
    }
    render(){
        return(
            <div>
                {this.display()}
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return {posts: state}
}


export default connect(mapStateToProps, {get_data: get_data})(SinglePost)