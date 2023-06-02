//주소에 있는 쿼리 파라미터추출해서 listPosts API(포스트 목록 받아오는) 호출
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SearchList from '../../components/searchlist/SearchList';
import { listPosts } from '../../modules/posts';
import { useParams, useSearchParams } from 'react-router-dom';
import { listSearch } from '../../modules/search';

const SearchListContainer = ({ keyword }) => {
  const { username } = useParams();
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const { error, loading, user, tags, books } = useSelector(
    ({ loading, user, search }) => ({
      error: search.error,
      loading: loading['searchs/LIST_SEARCH'],
      user: user.user,
      books: search.lists,
    }),
  );
  useEffect(() => {
    dispatch(listSearch(keyword));
  }, [dispatch, tags, searchParams]);

  return (
    <SearchList
      loading={loading}
      error={error}
      books={books}
      showWriteButton={user}
    />
  );
};

export default SearchListContainer;
