import playerStatus from '../app';

test.each([
  [51, { name: 'маг', health: 51 }, 'healthy'],
  [15, { name: 'маг', health: 15 }, 'wounded'],
  [14, { name: 'маг', health: 14 }, 'critical'],
])(
  ('players level of living  %s'),
  (_, player, expected) => {
    const status = playerStatus({ player });
    expect(status).toBe(expected);
  },
);
