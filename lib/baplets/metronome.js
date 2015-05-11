var kit = bap.kit();
var basic = bap.oscillator({
  attack: 0.001,
  release: 0.1,
  length: 0.08
});

kit.slot(1).layer(basic.with({ frequency: 330 }));
kit.slot(2).layer(basic.with({ frequency: 440 }));

// create the pattern and add notes using expressions
var pattern = bap.pattern({ bars: 2, tempo: 140 });
pattern.channel(1).add(
  ['*.1.01', 'A1'],
  ['*.2%1.01', 'A2']
);

pattern.kit('A', kit).start();
