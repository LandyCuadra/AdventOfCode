import {readFileSync} from 'fs';
import {join} from 'path';

type FileType = 'example' | 'challenge'

export const getListFromFile = (dayPath: string, type: FileType) => {
  return readFileSync(join(dayPath, `${type}.txt`)).toString().trim().split('\n');
};
