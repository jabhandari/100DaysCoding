const fs = require('fs').promises;
const path = require('path');

const testDir = path.join(__dirname, '..', 'out', 'test');

async function hasJsFiles(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const entryPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (await hasJsFiles(entryPath)) {
        return true;
      }
    } else if (entry.isFile() && entry.name.endsWith('.js')) {
      return true;
    }
  }
  return false;
}

(async () => {
  try {
    const stat = await fs.stat(testDir);
    if (!stat.isDirectory()) {
      throw new Error(`Expected a directory at ${testDir}`);
    }
  } catch (error) {
    console.error(`Test output directory missing: ${testDir}`);
    process.exit(1);
  }

  if (!(await hasJsFiles(testDir))) {
    console.error(`No compiled test files found in ${testDir}`);
    process.exit(1);
  }

  console.log(`Found compiled test output in ${testDir}`);
})();
