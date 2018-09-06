
import * as glob from 'glob';


export function resolvePaths(root: string, patterns: string[]): Promise<string[]> {

	return Promise.all(patterns.map(p => new Promise((resolve, reject) => {

		glob(p, {cwd: root}, (err, files) => {

			if(err) {
				reject(err);
			} else {
				resolve(files);
			}

		});

	}))).then(files => files.concat.apply([], files));

}
