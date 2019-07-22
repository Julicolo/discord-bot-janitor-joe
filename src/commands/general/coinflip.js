export default class Coinflip {
  static name = 'coinflip';
  static aliases = ['coin', 'flip', 'rng'];
  static description = 'Rolls a coin to determine the outcome of the game';

  static run(bot, message) {
    let coinflip =
      Math.floor(Math.random() * 2) == 0
        ? 'has blessed you, you will win next game'
        : "didn't bless you, you will lose this game";
    message.channel.send(coinflip);
  }
}