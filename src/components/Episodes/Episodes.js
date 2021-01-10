import React from 'react';
import { Typography, Link } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
import { useQuery } from 'react-query';
import fetchApi from '../../hooks/fetchApi';

const Episodes = () => {
  const { data, status } = useQuery('episodes', () =>
    fetchApi(`${process.env.REACT_APP_RICK_MORTY_API}/episode`)
  );

  if (status === 'loading') {
    return <p>Loading...</p>;
  }
  if (status === 'error') {
    return <p>Error :(</p>;
  }

  return (
    <div>
      <Typography variant="h2">Episodes</Typography>
      {data.results.map(episode => (
        <article key={episode.id}>
          <Link component={RouterLink} to={`/episodes/${episode.id}`}>
            <Typography variant="h6">
              {episode.episode} - {episode.name} <em>{episode.airDate}</em>
            </Typography>
          </Link>
        </article>
      ))}
    </div>
  );
};

export default Episodes;
