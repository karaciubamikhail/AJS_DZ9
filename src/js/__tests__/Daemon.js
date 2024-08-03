import Daemon from '../js/daemon';

test('character creation Daemon', () => {
  const daemon = new Daemon('John', 'Daemon');
  const result = {
    name: 'John',
    type: 'Daemon',
    health: 100,
    level: 1,
    distance: 1,
    base_attack: 100,
    defence: 40,
  };
  expect(daemon).toEqual(result);
});