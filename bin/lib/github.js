const assert = require('assert');
const axios = require('axios');

const username = 'xibang';
const token = process.env.GH_TOKEN;
assert.notDeepEqual(token, undefined, 'Invalid GH_Token');

const gql = `{
  organization(login: "${username}") {
   repositories {
     totalCount
   }
    projects: repositories(first: 20, isFork: false, privacy: PUBLIC, orderBy: {field: UPDATED_AT, direction: DESC}) {
     nodes {
       name
       description
       url
       primaryLanguage {
         name
         color
       }
       stargazers {
         totalCount
       }
       forks {
         totalCount
       }
     }
   }
 }
}`;

module.exports = () => axios.post('https://api.github.com/graphql', { query: gql }, {
  withCredentials: false,
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json;charset=utf-8',
    Authorization: `bearer ${token}`
  }
}).then(({ data: { data: { organization } } }) => ({
  repositories: organization.repositories.totalCount,
  projects: organization.projects.nodes.map(({ name, description, url, primaryLanguage, stargazers, forks }) => ({
    name,
    description,
    url,
    primaryLanguage,
    stargazers: stargazers.totalCount,
    forks: forks.totalCount
  }))
}));
