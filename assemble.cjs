const fs = require('node:fs/promises');
const path = require('node:path');
const crypto = require('node:crypto');
const files = require('./files.json');
const gitHash = bytes => crypto.createHash('sha1')
  .update('blob ' + bytes.length + '\0').update(bytes).digest('hex');

async function fetchFile(url) {
  for (let attempt = 0; attempt < 3; attempt++) {
    try {
      const response = await fetch(url, { signal: AbortSignal.timeout(60000) });
      if (!response.ok) throw new Error('HTTP ' + response.status);
      return Buffer.from(await response.arrayBuffer());
    } catch (error) {
      if (attempt === 2) throw error;
    }
  }
}

async function build() {
  let next = 0;
  await Promise.all(Array.from({ length: 8 }, async () => {
    while (next < files.length) {
      const file = files[next++];
      const bytes = file.url ? await fetchFile(file.url)
        : await fs.readFile(path.join(__dirname, 'overlay', file.dest));
      if (gitHash(bytes) !== file.sha) throw new Error('Hash mismatch: ' + file.dest);
      const dest = path.join('/site', file.dest);
      await fs.mkdir(path.dirname(dest), { recursive: true });
      await fs.writeFile(dest, bytes);
    }
  }));
  console.log('Verified and built ' + files.length + ' public files');
}

build().catch(error => { console.error(error.message); process.exitCode = 1; });
