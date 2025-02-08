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

        code_block: $ => seq(
            "code:", "/.*/", optional($.language), "\n", repeat(/.*/), 
        )

        language: $ => /.*/
        
        bold: $ => seq(
            "[", "*", /.*/, "]"
        )

        italic: $ => seq(
            "[", "/", /.*/, "]"
        )

        strike_through: $ => seq(
            "[", "-", /.*/, "]"
        )

        math: $ => seq(
            "[", "$", /.*/, "]"
        )
    }
});
