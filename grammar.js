// @ts-check

export default grammar({
  name: "brainfuckplus",

  extras: $ => [
    /\s/,
    $.comment,
    $.block_comment,
  ],

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

    comment: $ => token(seq(
      "::",
      /[^\(n][^\n]*/
    )),
    block_comment: $ => token(seq(
      "::(",
      repeat(choice(
        /[^)]/,
        seq(")", /[^:]/),
        seq("):", /[^:]/),
      )),
      ")::"
    )),

    loop: $ => seq(
      "[",
      repeat($._instruction),
      "]",
    ),
  },
});
