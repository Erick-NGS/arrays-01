const ids = new Set(['Erick', 'Silva', 'Mr.']);

ids.add(2);

ids.delete('Mr.');

for (const entry of ids.entries()) {
  console.log(entry);
}

console.log(ids);
