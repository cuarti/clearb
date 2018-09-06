
import {readFile} from 'fs';


export function readClearFile(path): Promise<string[]> {

	return new Promise((resolve, reject) => {

		readFile(path, {encoding: 'utf8'}, (err, content) => {

			if(err) {
				reject(err);
			} else {
				resolve(content.trim().split('\n'));
			}

		});

	});

}
