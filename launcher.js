const { spawn } = require('child_process');
const fs = require('fs');
const readline = require('readline');

// Chạy bot.js
const bot = spawn('node', ['bot.js']);

// Đọc commands.txt
const commands = fs.readFileSync('commands.txt', 'utf-8').split('\n').filter(c => c.trim());

let commandIndex = 0;

// Khi bot sẵn sàng nhận input, gửi command
bot.stdin.on('ready', () => {
  if (commandIndex < commands.length) {
    bot.stdin.write(commands[commandIndex] + '\n');
    commandIndex++;
  }
});

// Nếu bot chờ input, detect và gửi command
bot.stdout.on('data', (data) => {
  console.log(`[Bot] ${data}`);
  // Tùy theo output của bot mà gửi lệnh tiếp
});

bot.on('close', (code) => {
  console.log(`Bot exited with code ${code}`);
});
