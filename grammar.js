module.exports = grammar({
    name: "scrapbox",

    rules: {
        document: $ => repeat(choice($.block)),
        
        block: $ => choice(
            $.heading,
            $.paragraph,
        ),
        
        heading: $ => seq(
            "[", "*", repeat1("*"), /.*/, "]"
        ),
        
        paragraph: $ => seq(repeat1($.inline), "\n"),

        inline: $ => choice(
            $.bold,
            $.italic,
            $.strikeThrough,
            $.math,
        )

        bold: $ => seq(
            "[", "*", /.*/, "]"
        )

        italic: $ => seq(
            "[", "/", /.*/, "]"
        )

        strikeThrough: $ => seq(
            "[", "-", /.*/, "]"
        )

        math: $ => seq(
            "[", "$", /.*/, "]"
        )
    }
});
