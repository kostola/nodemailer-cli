# Nodemailer CLI

Simple TypeScript + Node.js command line tool to send mail using `nodemailer` library.

## How to run

1. Install dependencies: `npm install`
2. Build it: `npm run build-ts`
2. Run it: `node dist/index.js`

## Usage

**READ THIS:** The tool prints a usage recap with `node dist/index.js -h`.

### I'm too lazy

Here it is for you:

```
usage: index.js [-h] [-v] [-H HOST] [-p PORT] [-a USER PASS]
                [-f FROM] [-t TO] [-s SUBJECT] [-T TEXT]


Nodemailer command line tool

Optional arguments:
  -h, --help            Show this help message and exit.
  -v, --version         Show program's version number and exit.
  -H HOST, --host HOST  SMTP host
  -p PORT, --port PORT  SMTP port
  -a USER PASS, --auth USER PASS
                        SMTP AUTH PLAIN credentials
  -f FROM, --from FROM  Sender
  -t TO, --to TO        Sender
  -s SUBJECT, --subject SUBJECT
                        Subject
  -T TEXT, --text TEXT  Text
```

### Default values

Every parameter is optional and has a default value that will be used if not specified.

| Param           | Default value                |
| --------------- | ---------------------------- |
| `-H, --host`    | `localhost`                  |
| `-p, --port`    | `1025`                       |
| `-a, --auth`    | *don't use authentication*   |
| `-f, --from`    | `sender@example.com`         |
| `-t, --to`      | `receiver@example.com`       |
| `-s, --subject` | `nodemailer test`            |
| `-t, --text`    | `nodemailer test content`    |
