# Generates one page per example topic, from _data/topics/<sidebar>.yml.
# The pages aren't in the sidebar; they're reached from the topic links on examples and the
# topic chips on a module's All examples page. See pages/about/site-components.md.
module ElitmaTopics
  class TopicPageGenerator < Jekyll::Generator
    safe true

    def generate(site)
      (site.data['topics'] || {}).each do |sidebar, data|
        prefix = data['prefix']
        (data['topics'] || []).each do |topic|
          chapter = site.pages.find { |p| p.data['page_id'] == topic['chapter'] }
          page = Jekyll::PageWithoutAFile.new(site, site.source, '', "#{prefix}-topic-#{topic['id']}.html")
          page.content = "{% include topic-page.html %}"
          page.data.merge!(
            'layout' => 'module-page',
            'title' => "Examples: #{topic['title']}",
            'description' => topic['description'],
            'sidebar' => sidebar,
            'page_id' => "#{prefix}-topic-#{topic['id']}",
            'topic' => topic['id'],
            'all_url' => "/#{prefix}-all-examples",
            'back_to' => topic['chapter'],
            'back_to_url' => chapter ? chapter.url : nil,
            'back_to_section' => topic['section'],
            'back_to_section_title' => topic['section_title']
          )
          site.pages << page
        end
      end
    end
  end
end
