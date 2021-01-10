import React from 'react';
import { Typography, Link } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
import { useQuery } from 'react-query';
import fetchApi from '../../hooks/fetchApi';

const Characters = () => {
  const { status, data } = useQuery('characters', () =>
    fetchApi(`${process.env.REACT_APP_RICK_MORTY_API}/character`)
  );

  if (status === 'loading') return <p>Loading...</p>;
  if (status === 'error') return <p>Error :(</p>;

  return (
    <div>
      <Typography variant="h2">Characters</Typography>
      {data.results.map(person => (
        <article key={person.id}>
          <Link component={RouterLink} to={`/characters/${person.id}`}>
            <Typography variant="h6">
              {person.name} - {person.gender}: {person.species}
            </Typography>
          </Link>
        </article>
      ))}
    </div>
  );
};

export default Characters;
