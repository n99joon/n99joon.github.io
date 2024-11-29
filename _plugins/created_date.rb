module Jekyll
    class CreationDateGenerator < Generator
      priority :low
      def generate(site)
        site.pages.each do |page|
          if page.path
            git_creation_date = `git log --diff-filter=A --format="%aD" -- #{page.path}`.strip
            page.data['date_created'] = git_creation_date unless git_creation_date.empty?
          end
        end
      end
    end
  end
  