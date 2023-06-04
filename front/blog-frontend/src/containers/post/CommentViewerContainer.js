// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import CommentViewer from '../../components/post/CommentViewer';
// import { listComments } from '../../modules/comments';

// const CommentViewerContainer = ({ bookId, postId }) => {
//   // const { username } = useParams();
//   const dispatch = useDispatch();
//   const { error, loading, comments } = useSelector(
//     ({ loading, user, search }) => ({
//       error: comments.error,
//       loading: loading['comments/LIST_COMMENTS'],
//       comments: comments.comments,
//     }),
//   );

//   useEffect(() => {
//     dispatch(listComments(bookId, postId));
//   }, [dispatch, bookId, postId]);

//   return <CommentViewer postId={postId} bookId={bookId} />;
// };

// export default CommentViewerContainer;
