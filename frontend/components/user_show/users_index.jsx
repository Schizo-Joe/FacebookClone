import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import NavBar from '../navbar/navbar';
import FriendRequests from '../friend_requests/friend_requests_index';
import Friendship from '../friendships/friendship_index';
import {fetchUsers, clearUsers} from '../../actions/user_actions';
import PostIndex from '../posts/posts_index';
import Modal from '../modal/modal';
import CreatePostForm from '../posts_form/create_post_form';
import UsersIndexItem from '../user_show/users_index_item';

export default props => {
  const users = useSelector(state => Object.values(state.entities.users));
  const currentUser = useSelector(state => state.session.user);
  const [openModal, setModal] = useState(false);
  
  const dispatch = useDispatch();

  const showModal = () => {
    setModal(true);
  }

  const hideModal = () => {
    setModal(false);
  }

  useEffect(() => {
    dispatch(fetchUsers());
    return () => {
      dispatch(clearUsers());
    }
  }, [])

  if (!currentUser) return '';
  
  return (
    <div>
      <NavBar
        currentUser={currentUser}
        history={props.history}
        match={props.match}
        location={props.location}
      />
      <div className='users-index-div'>
        <div className='feed-container'>

          <div className='post-on-your-mind-container'>
            <div className='post-on-your-mind'>
              <div className='post-input-click'>
                <div className='post-input-photo'>
                  <img src={currentUser.profilePhoto} alt="" />
                </div>
                <div className='post-actual-input' onClick={showModal}>What's on your mind, {currentUser.firstName}?</div>
              </div>
            </div>
          </div>
          
          <h1>Users of Fakebook</h1>
          <ul>
            {
              users.map(user => {
                return (
                  <UsersIndexItem
                    key={user.id}
                    user={user}
                  />
                )
              })
            }
          </ul>

          

        </div>
      </div>

      <Modal show={openModal} handleClose={hideModal} >
        <CreatePostForm
          history={props.history}
          match={props.match}
          location={props.location}
          hideModal={hideModal}
        />
      </Modal>

    </div>
  )
}