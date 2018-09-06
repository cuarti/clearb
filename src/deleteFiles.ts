
import {unlink} from 'fs';


export function deleteFiles(files: string[]): Promise<void> {

	return Promise.all(files.map(f => new Promise((resolve, reject) => {

		unlink(f, err => {

			if(err) {
				reject(err);
			} else {
				resolve();
			}

		});

	}))).then(() => undefined);

}
