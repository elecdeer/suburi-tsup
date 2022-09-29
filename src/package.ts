import * as fs from "fs/promises";

export const readPackageJson = async () => {
	const file = await fs.readFile("package.json");
	return JSON.parse(file.toString());
}
