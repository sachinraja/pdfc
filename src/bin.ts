#!/usr/bin/env node
import process from 'node:process'
import { getCli } from './cli'

const [node, app, ...args] = process.argv

const cli = getCli({
  binaryName: `${node} ${app}`,
  binaryVersion: '1.0.0',
})

void cli.runExit(args)
