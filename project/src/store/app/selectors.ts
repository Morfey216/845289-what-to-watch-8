import { Genre } from '../../types/genres';
import { NameSpace } from '../reducer';
import { State } from '../store';

const NAME_SPACE = NameSpace.App;

export const getGenre = (state: State): Genre => state[NAME_SPACE].genre;
