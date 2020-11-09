const inject = (items, sections) => {
  let output = [];
  let pre = 0;
  for (let i = 0; i < sections.length; ++i) {
    let piece = items.slice(pre, sections[i].index);
    output = output.concat(piece);
    output.push(sections[i].content);
    pre = sections[i].index;
  }
  output = output.concat(items.slice(pre));
  return output;
};
export { inject };
