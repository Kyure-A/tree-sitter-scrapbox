(heading)                 @markup.heading
(code_block)              @markup.raw.block
(language)                @constant               ; language name after `code:`
(quote)                   @markup.quote
(list)                    @markup.list
(checkbox)                @markup.list
(horizontal_rule)         @punctuation.separator

(bold)                    @markup.bold
(italic)                  @markup.italic
(strike_through)          @markup.strikethrough
(underline)               @markup.underline
(inline_code)             @markup.raw.inline
(math)                    @constant.math

(link)                    @markup.link.uri
(image)                   @markup.link.uri
(ruby)                    @markup.annotation
