
import {clearb} from './clearb';


// TODO: Pass by argument root path where see files (cwd)
// TODO: Pass option by argument where .clearb file is
export = function() {

	clearb().then(files => {
		console.log('\x1b[32mPaths cleared:\x1b[0m');
		files.forEach(f => console.log(`\x1b[32m- ${f}\x1b[0m`));
		// process.exit(0);

	}).catch(err => {
		console.error(err);
		// process.exit(1);
	});

}
