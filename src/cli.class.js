//=============================================================================
//
// File:         copyright/src/cli.class.js
// Language:     ECMAScript 2015
// Copyright:    Joe Honton © 2018
// License:      CC-BY-NC-ND 4.0
// Initial date: Dec 30, 2018
// Contents:     Command line interface
//
//=============================================================================

import {expect}			from 'joezone';
import {terminal}		from 'joezone';
import {Pfile}			from 'joezone';
import fs				from 'fs';

export default class CLI {
	
    constructor() {
		this.copyrightPfile = null;
		this.destinationPfile = null;
		
		Object.seal(this);
    }
    
    //^ Check to see if all the necessary command line arguments are present and valid
	// argv[0] node
	// argv[1] main.js
	// argv[2] copyright file
	// argv[3] destination file
    //< returns false to prevent actual execution
    validateOptions() {
    	    	
    	var argv = Array.from(process.argv);
    	
    	if (argv.length == 2)
    		this.usageAndExit();

    	for (let i = argv.length-1; i > 1 ; i--) {
    		var arg = argv[i];
	    	switch (arg) {
		    	case '--version':
		    		this.exit(this.showVersion());
		    		return false;
	    		
		    	case '--help':
		    		this.exit(this.listHelp());
		    		return false;
	    	}
    	}

    	// after stripping off any --defs option, there should be just the copyright file and the destination file left
    	if (argv.length != 4)
    		this.usageAndExit();
    	
    	if (argv[2].constructor.name == 'String')
    		this.copyrightPfile = new Pfile(argv[2]);
    	
    	if (argv[3].constructor.name == 'String')
    		this.destinationPfile = new Pfile(argv[3]);
    	
    	return true;
    }
    
    usageAndExit() {
		var s = [];
		s.push("usage: copyright [copyright file] [destination file] [options]");
		s.push("");
		s.push("options:");
		s.push("    --version");
		s.push("    --help       show help");
		this.exit(s.join("\n"));
    }
    
    showVersion() {
    	try {
    		var packageFile = new Pfile(__dirname).addPath('../package.json').name;
	    	var contents = fs.readFileSync(packageFile, 'utf-8');
	    	var obj = JSON.parse(contents);
	    	return `version v${obj.version}`;
    	}
    	catch (err) {
    		return `version unknown ${err.message}`;
    	}
    }

    listHelp() {
		var s = [];
		s.push("usage: copyright [copyright file] [destination file] [options]");
		return s.join("\n")
    }
    
    exit(message) {
		terminal.writeToConsoleOrStderr("\nAdd copyright text to destination file\n");
		terminal.writeToConsoleOrStderr(message + "\n");
		process.exit(0);    
    }

    execute() {
		var defsFile = new DefsFile();
		var sourceFile = new SourceFile(defsFile);

		if (!copyrightPfile.exists()) {
			terminal.abnormal( `Copyright file ${this.copyrightPfile.name} not found`);
			process.exit(1);
		}
		if (!destinationPfile.exists()) {
			terminal.abnormal( `Destination file ${this.destinationPfile.name} not found`);
			process.exit(1);
		}
			
		var copyrightText = fs.readFileSync(copyrightPfile.name);
		var destinationText = fs.readFileSync(destinationPfile.name);
		
		fs.writeFileSync(destinationPfile.name, copyrightText + destinationText);
		
		process.exit(0);
    }

}
