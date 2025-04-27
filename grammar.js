module.exports = grammar({
    name: "scrapbox",

    rules: {
        document: $ => repeat(choice($.block)),

        block: $ => choice(
            $.heading,
            $.paragraph,
            $.code_block,
            $.quote,
            $.list,
            $.checkbox,
            $.horizontal_rule
        ),

        heading: $ => seq(
            "[", repeat1("*"), /[^\]]+/, "]"
        ),

        paragraph: $ => seq(repeat1($.inline), "\n"),

        code_block: $ => seq(
            "code:", optional($.language), "\n", repeat1($.code_line)
        ),

        code_line: $ => /[^\n]*/,

        language: $ => /[a-zA-Z0-9_\-]+/,

        quote: $ => seq(">", /[^\n]*/, "\n"),

        list: $ => seq(
            choice("-", "・", "*"),
            " ",
            repeat1($.inline),
            "\n"
        ),

        checkbox: $ => seq(
            "[", choice(" ", "x", "X"), "]", " ", repeat1($.inline), "\n"
        ),

        horizontal_rule: $ => seq("---", "\n"),

        inline: $ => choice(
            $.bold,
            $.italic,
            $.strike_through,
            $.underline,
            $.inline_code,
            $.math,
            $.link,
            $.image,
            $.ruby,
            $.plain_text
        ),

        bold: $ => seq("[*", /[^\]]+/, "]"),

        italic: $ => seq("[/", /[^\]]+/, "]"),

        strike_through: $ => seq("[-", /[^\]]+/, "]"),

        underline: $ => seq("[_", /[^\]]+/, "]"),

        inline_code: $ => seq("`", /[^`]+/, "`"),

        math: $ => seq("[$", /[^\]]+/, "]"),

        link: $ => seq("[", /https?:\/\/[^\s\]]+/, optional(seq(" ", /[^\]]+/)), "]"),

        image: $ => seq("[", /https?:\/\/[^\s\]]+\.(?:png|jpg|jpeg|gif|svg)/, optional(seq(" ", /[^\]]+/)), "]"),

        ruby: $ => seq("[", /[^\|\]]+/, "|", /[^\]]+/, "]"),

        plain_text: $ => /[^\[\]`]+/
    }
});
