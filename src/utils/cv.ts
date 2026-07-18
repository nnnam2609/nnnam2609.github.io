import { existsSync } from 'node:fs';
import { resolve } from 'node:path';

const publicCv = resolve(process.cwd(), 'public', 'cv.pdf');

export const cvPath = existsSync(publicCv) ? '/cv.pdf' : undefined;
