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
      $.add_keyword,
      $.sub_keyword,
      $.number,
      $.string,
    ),

    increment: $ => "+",
    decrement: $ => "-",
    move_right: $ => ">",
    move_left: $ => "<",
    output: $ => ".",
    input: $ => ",",

    mov_keyword: $ => "mov",
    zero_keyword: $ => "zero",
    add_keyword: $ => "add",
    sub_keyword: $ => "sub",

    number: $ => /\d+/,

    string: $ => seq(
      '"',
      repeat(choice(
        $.string_escape,
        /[^"\\\n]+/,
      )),
      '"',
    ),

    string_escape: $ => /\\./,

    comment: $ => token(seq(
      "::",
      /[^\(\n][^\n]*/,
    )),

    block_comment: $ => token(seq(
      "::(",
      repeat(choice(
        /[^)]/,
        seq(")", /[^:]/),
        seq("):", /[^:]/),
      )),
      ")::",
    )),

    loop: $ => seq(
      "[",
      repeat($._instruction),
      "]",
    ),
  },
});
