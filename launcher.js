const { spawn } = require('child_process');

const bot = spawn('node', ['bot.js'], { stdio: ['pipe', 'inherit', 'inherit'] });

const commands = [
  'Add duongraz ronadoyeumesi',
  'Acc duongraz',
  'Run'
];

function sendCommand(index) {
  if (index >= commands.length) return;
  bot.stdin.write(commands[index] + '\n');
  setTimeout(() => sendCommand(index + 1), 3000); // đợi 3 giây giữa mỗi lệnh
}

setTimeout(() => sendCommand(0), 2000); // đợi 2 giây cho bot khởi động xong
