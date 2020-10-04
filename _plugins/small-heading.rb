module Jekyll
  class RenderSmallHeadingTag < Liquid::Tag

    def initialize(tag_name, text, tokens)
      super
      @text = text
    end

    def render(context)
      "<p class='small-heading'>#{@text}</p>"
    end
  end
end

Liquid::Template.register_tag('small_heading', Jekyll::RenderSmallHeadingTag)
