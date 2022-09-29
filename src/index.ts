import { sum } from "./sum";
import {readPackageJson} from "./package";

console.log(sum(1, 2));

export const pkg = await readPackageJson();
console.log(pkg);


