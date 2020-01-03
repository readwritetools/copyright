//=============================================================================
//
// File:         copyright/src/main.js
// Language:     ECMAScript 2015
// Copyright:    Read Write Tools © 2019
// License:      MIT
// Initial date: Dec 30, 2018
// Usage:        main entry point
//
//=============================================================================

import CLI from './cli.class.js';
var cli = new CLI();

// Read the command line and execute
if (cli.validateOptions())
	cli.execute();
