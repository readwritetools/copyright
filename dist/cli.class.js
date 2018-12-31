var expect = require('joezone').expect, terminal = require('joezone').terminal, Pfile = require('joezone').Pfile, fs = require('fs');

module.exports = class CLI {
    constructor() {
        this.copyrightPfile = null, this.destinationPfile = null, Object.seal(this);
    }
    validateOptions() {
        var e = Array.from(process.argv);
        2 == e.length && this.usageAndExit();
        for (let t = e.length - 1; t > 1; t--) {
            var i = e[t];
            switch (i) {
              case '--version':
                return this.exit(this.showVersion()), !1;

              case '--help':
                return this.exit(this.listHelp()), !1;
            }
        }
        return 4 != e.length && this.usageAndExit(), 'String' == e[2].constructor.name && (this.copyrightPfile = new Pfile(e[2])), 
        'String' == e[3].constructor.name && (this.destinationPfile = new Pfile(e[3])), 
        !0;
    }
    usageAndExit() {
        var e = [];
        e.push('usage: copyright [copyright file] [destination file]'), e.push(''), e.push('options:'), 
        e.push('    --version'), e.push('    --help       show help'), this.exit(e.join('\n'));
    }
    showVersion() {
        try {
            var e = new Pfile(__dirname).addPath('../package.json').name, i = fs.readFileSync(e, 'utf-8'), t = JSON.parse(i);
            return `version v${t.version}`;
        } catch (e) {
            return `version unknown ${e.message}`;
        }
    }
    listHelp() {
        var e = [];
        return e.push('usage: copyright [copyright file] [destination file]'), e.join('\n');
    }
    exit(e) {
        terminal.writeToConsoleOrStderr('\nAdd copyright text to destination file\n'), terminal.writeToConsoleOrStderr(e + '\n'), 
        process.exit(0);
    }
    execute() {
        this.copyrightPfile.exists() || (terminal.abnormal(`Copyright file ${this.copyrightPfile.name} not found`), 
        process.exit(1)), this.destinationPfile.exists() || (terminal.abnormal(`Destination file ${this.destinationPfile.name} not found`), 
        process.exit(1));
        var e = fs.readFileSync(this.copyrightPfile.name), i = fs.readFileSync(this.destinationPfile.name);
        -1 == i.indexOf(e) && fs.writeFileSync(this.destinationPfile.name, e + i), process.exit(0);
    }
};