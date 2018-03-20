module.exports = (text) => {
    const brackets = '{}[]()';
    const stack = [];
    let character;
    let position;

    for (let i = 0; i < text.length; i += 1) {
        character = text[i];
        position = brackets.indexOf(character);

        if (position % 2 === 0) {
            stack.push(position + 1);
        } else if (stack.length === 0 || stack.pop() !== position) {
               return false;
            }
        }
    return true;
};
