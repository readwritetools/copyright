//=============================================================================
//
// File:         copyright/src/main.js
// Language:     ECMAScript 2015
// Copyright:    Joe Honton © 2018
// License:      CC-BY-NC-ND 4.0
// Initial date: Dec 30, 2018
// Usage:        main entry point
//
//=============================================================================

import CLI from './cli.class.js';
var cli = new CLI();

// Read the command line and execute
if (cli.validateOptions())
	cli.execute();
