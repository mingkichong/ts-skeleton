import * as fs from 'fs';
import * as util from 'util';

const readFile = util.promisify(fs.readFile);

const main = async () => {
  console.log("HELLO WORLD");

  const data = await readFile('./package.json', 'utf8');
  console.log(data);
};

main();
