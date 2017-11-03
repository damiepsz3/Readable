import { createSelector } from 'reselect';

const selectRoute = (state) => state.get('route').getIn(['location']);
const selectPosts = (state) => state.get('global').get('posts');
const selectComments = (state) => state.get('global').get('comments');

const makeSelectPostCategory = () => createSelector(
  [ selectPosts, selectRoute, selectComments ],
  ( posts, routeState, comments ) => {
    if(posts) {
      const pathname = routeState.get('pathname').split('/')[1]
      if(pathname !== '' && comments) {
          return posts
                  .filter(p => p.category === pathname)
                  .reduce((acum, pf) => {
                    const postComments = comments.filter(com => com.parentId === pf.id)
                    console.log(comments);
                    return acum.push({
                      ...pf,
                      'comments': postComments
                    })
                  }, [])
      }{
        return posts
                .reduce((acum, pf) => {
                  const postComments = comments.filter(com => com.parentId === pf.id)
                  console.log(2);
                  return acum.push({
                    ...pf,
                    'comments': postComments
                  })
                }, [])
      }
    } else {
      return []
    }
  }
)

export {
  makeSelectCategory,
  makeSelectPostCategory
}
