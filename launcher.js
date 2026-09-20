const { spawn } = require('child_process');

const bot = spawn('node', ['bot.js'], { stdio: ['pipe', 'inherit', 'inherit'] });

const commands = [
  'Add duongraz ronadoyeumesi',
  'Acc duongraz',
  'Run'
];

function sendCommand(index) {
  if (index >= commands.length) return;
  console.log(`[Launcher] Sending: ${commands[index]}`);
  bot.stdin.write(commands[index] + '\n');
  setTimeout(() => sendCommand(index + 1), 3000);
}

setTimeout(() => sendCommand(0), 3000);

bot.on('close', (code) => {
  console.log(`[Launcher] Bot exited with code ${code}`);
});
