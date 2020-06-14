const fs = require('fs')
const os = require('os')
const path = require('path')

if (process.env.EVENT_PAYLOAD && process.env.EVENT_PAYLOAD.length) {
  const tempdir = fs.mkdtempSync(path.join(os.tmpdir(), 'github-event-payload-'))
  const payloadPath = path.join(tempdir, 'payload.json')
  fs.writeFileSync(payloadPath, process.env.EVENT_PAYLOAD)
  process.env.GITHUB_EVENT_PATH = payloadPath
}

require('github-script')
