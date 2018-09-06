
import {readClearFile} from './readClearFile';
import {resolvePaths} from './resolvePaths';
import {deleteFiles} from './deleteFiles';


export function clearb(root: string = process.cwd(), clearFile: string = '.clearb'): Promise<string[]> {

	return readClearFile(clearFile)
		.then(patterns => resolvePaths(root, patterns))
		.then(files => deleteFiles(files).then(() => files));

}
