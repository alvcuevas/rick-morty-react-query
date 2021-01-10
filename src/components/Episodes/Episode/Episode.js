import React from 'react';
import { Typography, Link } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
import { useParams } from 'react-router';
import { useQuery } from 'react-query';
import fetchApi from '../../../hooks/fetchApi';

const Episode = () => {
  const { episodeId } = useParams();
  const { data, status } = useQuery(`episode-${episodeId}`, () =>
    fetchApi(`${process.env.REACT_APP_RICK_MORTY_API}/episode/${episodeId}`)
  );

  if (status === 'loading') return <p>Loading...</p>;
  if (status === 'error') return <p>Error :(</p>;

  return (
    <div>
      <Typography variant="h2">{data.name}</Typography>
      <Typography variant="body1">{data.air_date}</Typography>
      <br />
      <Typography variant="h4">Characters</Typography>
      {data.characters.map(character => {
        const characterUrlParts = character.split('/').filter(Boolean);
        const characterId = characterUrlParts[characterUrlParts.length - 1];
        return <Character id={characterId} key={characterId} />;
      })}
    </div>
  );
};

const Character = ({ id }) => {
  const { data, status } = useQuery(`character-${id}`, () =>
    fetchApi(`${process.env.REACT_APP_RICK_MORTY_API}/character/${id}`)
  );

  if (status === 'loading') return <p>Loading...</p>;
  if (status === 'error') return <p>Error :(</p>;

  return (
    <article key={id}>
      <Link component={RouterLink} to={`/characters/${id}`}>
        <Typography variant="h6">{data.name}</Typography>
      </Link>
    </article>
  );
};

export default Episode;
