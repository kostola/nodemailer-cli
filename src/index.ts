import * as nodemailer from "nodemailer";

async function main(args: any) {

    const transportParams = args.auth
    ? {
        host: args.host,
        port: args.port,
        secure: false,
        auth: {
            method: "PLAIN",
            user: args.auth[0],
            pass: args.auth[1]
        }
    }
    : {
        host: args.host,
        port: args.port,
        secure: false
    };

    const transporter = nodemailer.createTransport(transportParams);

    const info = await transporter.sendMail({
        from: args.from,
        to: args.to,
        subject: args.subject,
        text: args.text,
        html: `<div>${args.text}</div><div></br><i>Sent with nodemailer-cli</i></div>`
    });

    console.log("Message sent: %s", info.messageId);
}

var ArgumentParser = require('argparse').ArgumentParser;
var parser = new ArgumentParser({ version: '1.0.0', addHelp: true, description: 'Nodemailer command line tool' });
parser.addArgument([ '-H', '--host' ], { help: 'SMTP host', defaultValue: 'localhost' });
parser.addArgument([ '-p', '--port' ], { help: 'SMTP port', type: 'int', defaultValue: 1025 });
parser.addArgument([ '-a', '--auth' ], { help: 'SMTP AUTH PLAIN credentials', metavar: ['USER', 'PASS'], nargs: 2, required: false });
parser.addArgument([ '-f', '--from' ], { help: 'Sender', defaultValue: 'sender@example.com' });
parser.addArgument([ '-t', '--to' ], { help: 'Sender', defaultValue: 'receiver@example.com' });
parser.addArgument([ '-s', '--subject' ], { help: 'Subject', defaultValue: 'nodemailer test' });
parser.addArgument([ '-T', '--text' ], { help: 'Text', defaultValue: 'nodemailer test content' });
var args = parser.parseArgs();

main(args).catch(console.error);
