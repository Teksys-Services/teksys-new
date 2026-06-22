#!/usr/bin/env node
import('./dist/server/server.js').catch(err => {
  console.error('Failed to start server:', err);
  process.exit(1);
});
