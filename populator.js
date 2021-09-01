const dayjs = require('dayjs');
const {v4: uuidv4} = require('uuid');

const populate = () => {
  const users = ['uche', 'joe', 'chinwe', 'dave', 'prosper', 'me'];
  const words = [
    'hello',
    'ship',
    'musk',
    'live',
    'silly',
    'jokd',
    'joke',
    'serve',
    'server',
    'serious',
    'wire',
    'mounth',
    'robot',
    'chair',
    'mesh',
    'tweet',
    'car',
    'cat',
    'fuck',
    'goat',
    'wife',
  ];

  let messages = [];

  const now = dayjs();

  while (messages.length < 30) {
    console.log(`i is --> ${messages.length}`);
    const u = Math.floor(Math.random() * users.length);
    const w = Math.floor(Math.random() * words.length);
    const t = Math.floor(Math.random() * 58);

    const message = {
      id: uuidv4(),
      time: now.add(t, 's').valueOf(),
      sender: users[u],
      content: words[w],
    };
    console.log(`adding message ${message.content}`);
    messages.push(message);
  }

  return messages;
};

const texts = populate();
console.log(texts);

// texts.forEach(t => {
//   console.log(
//     `(${t.sender}) : [${t.content}]--> ${dayjs(t.time).format('hh:mm:ss a')}\n`,
//   );
// });
