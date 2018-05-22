  const assert = require('chai').assert;
  const expect = require('chai').expect;
  const generateRandomValue = require('../app/game').generateRandomValue;
  const checkWinner = require('../app/game').checkWinner;

  const valuesEnum={
    ROCK:0,
    SCISSORS:1,
    PAPER:2
  };

  describe('game tests using mocha and chai',()=>{

    it('Check the random value generator: expected to be between 0 and 2',()=>{
      let result = generateRandomValue();
      expect(result).to.be.within(valuesEnum.ROCK,valuesEnum.PAPER);
    });


    describe('Check the posible outcomes depending de selected value',()=>{
      it('Check a tie result when both players select the same value: Message should be "Tie game"',()=>{
        let result =checkWinner(valuesEnum.PAPER,valuesEnum.PAPER);
        assert.strictEqual(result, 'Tie game');
      });

      it('Check the oucome when a player selects Stone and cpu selects Scissors: Message should be "Player wins"', ()=>{
        let result =checkWinner(valuesEnum.ROCK,valuesEnum.SCISSORS);
        assert.strictEqual(result, 'Player wins');
      });

      it('Check the oucome when a player selects Scissors and cpu selects Paper: Message should be "Player wins"', ()=>{
        let result =checkWinner(valuesEnum.SCISSORS,valuesEnum.PAPER);
        assert.strictEqual(result, 'Player wins');
      });

      it('Check the oucome when a player selects Paper and cpu selects Rock: Message should be "Player wins"', ()=>{
        let result =checkWinner(valuesEnum.PAPER,valuesEnum.ROCK);
        assert.strictEqual(result, 'Player wins');
      });

      it('Check the oucome when a player selects Scissors and cpu selects Rock: Message should be "cpu Wins"', ()=>{
        let result =checkWinner(valuesEnum.SCISSORS,valuesEnum.ROCK);
        assert.strictEqual(result, 'cpu Wins');
      });

        it('Check the oucome when a player selects Paper and cpu selects Scissors: Message should be "cpu Wins"', ()=>{
        let result =checkWinner(valuesEnum.PAPER,valuesEnum.SCISSORS);
        assert.strictEqual(result, 'cpu Wins');
      });

      it('Check the oucome when a player selects Rock and cpu selects Paper: Message should be "cpu Wins"', ()=>{
        let result =checkWinner(valuesEnum.ROCK,valuesEnum.PAPER);
        assert.strictEqual(result, 'cpu Wins');
      });

    });

  });
