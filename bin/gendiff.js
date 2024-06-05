#!/usr/bin/env node
import { program } from 'commander';
import fs from 'node:fs';
import { showeTheDiffer } from '../Proba.js';

// import * as path from 'path';



// const showFullPath = (pat) => {
// const fullPath = path.resolve(pat);
// return fullPath
// }

program
.name('gendiff')
.description('Compares two configuration files and shows a difference.')
.version('0.8.0')
.argument('<filepath1>')
.argument('<filepath2>')
.option('-f, --format [type]', 'output format')
.action((filepath1, filepath2) => showeTheDiffer(filepath1, filepath2))
program.parse();

// const options = program.opts();
// if (options.format) showFullPath(argument)


// const filepath1 = './fixtures/file1.json'
// const filepath2 = './fixtures/file2.json'




