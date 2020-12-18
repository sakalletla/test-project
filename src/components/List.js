import React from 'react';
const List = (props) => {
const {repos} = props;

if(!repos || repos.length == 0) return <p> No results found, Sorry</p>;
return(
<ul>
<h2 className='list-head'>Available Public Repositories</h2>
{ repos.map((repos) => {
return(
<li key={repos.id} className='list'>
            <span className='repo-text'>{repos.name} </span>
            <span className='repo-description'>{repos.description}</span>
          </li>
);

} )}
</ul>
);
};

export default List;
