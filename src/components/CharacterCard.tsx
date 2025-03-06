/**
 * @file CharacterCard.tsx
 * @description Componente que muestra una tarjeta de personaje con su imagen, nombre, especie y estado.
 * @copyright (c) 2025 - Santiago Novoa
 * @license MIT
 */

import { Typography } from '@mui/material';
import { CharacterCardProps } from '../types/types';

const CharacterCard = ({ character }: CharacterCardProps) => {

  const getBorderColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'alive':
        return '#00FF80';
      case 'dead':
        return '#FF0033';
      default:
        return '#FFD700';
    }
  };
  
  const translateStatus = (status: string) => {
    switch (status.toLowerCase()) {
      case 'alive':
        return 'Vivo';
      case 'dead':
        return 'Muerto';
      default:
        return 'Desconocido';
    }
  };
  
  return (
    <div style={{marginTop: '20px'}}>
      <img
        src={character.image}
        alt={character.name}
        width="150"
        height="150"
        style={{
          borderRadius: '50%',
          border: `4px solid ${getBorderColor(character.status)}`,
          boxShadow: `0 0 12px ${getBorderColor(character.status)}`,
        }}
      />
      <Typography variant="h4" color="black">
        {character.name}
      </Typography>

      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', justifyContent: 'center' }}>
        <Typography variant="body1" color="black">
          {character.species}
        </Typography>
        <Typography variant="body1" color="black">
          •
        </Typography>
        <Typography variant="body1" color={getBorderColor(character.status)}>
          {translateStatus(character.status)}
        </Typography>
      </div>
    </div>
  );
};

export default CharacterCard;
