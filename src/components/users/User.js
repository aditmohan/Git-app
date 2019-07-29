import React,{ Fragment, Component} from 'react';
import{Link} from'react-router-dom';

export class User extends Component {
componentDidMount(){
    this.props.getUser(this.props.match.params.login);
}


    render() {
        const{
            name,
            company,
            avatar_url,
            location,
            bio,
            blog,
            login,
            html_url,
            followers,
            following,
            public_repos,
            public_gists,
            hireable
          }=this.props.user;
          const{loading}=this.props
        return (
            <Fragment>
                <Link to='/' className='btn btn-light'>
                    Back to Search
                </Link>
                Hireable:{''}
                {hireable?<i className='fas fa-check text-success'/>: <i className='fas fa-times-circle text-danger'/>}
                <div className='card-grid-2'>
                 <div className='all-centre'>
                 <img src={avatar_url}
                 className='round-img'
                 alt=''
                 style={{ width:'150 px'    }}/>    
                     
                 <h1>{name}</h1>
                 <p> Location:{location} </p>
                 <div>
                 { bio &&(
               <Fragment>
                <h3> Bio:{bio}</h3>

               </Fragment>
           )}
           <a href={html_url} className='btn btn-dark my-1'>
               Visit Github
           </a>
                 </div>


                 <div>
                     
                     </div>    

                 </div>  
                     
                     
                </div>

            </Fragment>
        )
    }
}

export default User

