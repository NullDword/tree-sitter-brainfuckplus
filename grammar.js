// @ts-check

export default grammar({
  name: "brainfuckplus",

  rules: {
    source_file: $ => repeat($._instruction),

    _instruction: $ => choice(
      $.increment,
      $.decrement,
      $.move_right,
      $.move_left,
      $.output,
      $.input,
      $.loop,
      $.mov_keyword,
      $.zero_keyword,
      $.number,
    ),

    increment: $ => "+",
    decrement: $ => "-",
    move_right: $ => ">",
    move_left: $ => "<",
    output: $ => ".",
    input: $ => ",",
    mov_keyword: $ => "mov",
    zero_keyword: $ => "zero",
    number: $ => /\d+/,

    loop: $ => seq(
      "[",
      repeat($._instruction),
      "]",
    ),
  },
});
