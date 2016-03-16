require File.expand_path('../boot', __FILE__)

require 'rails/all'
#config.active_record_identity_map = true
#ActiveRecord::IdentityMap.enabled = true

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module Project
  class Application < Rails::Application
    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration should go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded.

    # Set Time.zone default to the specified zone and make Active Record auto-convert to this zone.
    # Run "rake -D time" for a list of tasks for finding time zone names. Default is UTC.
    # config.time_zone = 'Central Time (US & Canada)'

    # The default locale is :en and all translations from config/locales/*.rb,yml are auto loaded.
    # config.i18n.load_path += Dir[Rails.root.join('my', 'locales', '*.{rb,yml}').to_s]
    # config.i18n.default_locale = :de

    # Do not swallow errors in after_commit/after_rollback callbacks.
    require 'sprockets/railtie'
    config.active_record.raise_in_transactional_callbacks = true
    config.assets.precompile += %w(bootstrap.css)
    config.assets.precompile += %w(animate.css)
    config.assets.precompile += %w(set.css)
    config.assets.precompile += %w(blueimp-gallery.min.css)
    config.assets.precompile += %w(style.css)
    config.assets.precompile += %w(jquery.js)
    config.assets.precompile += %w(bootstrap.min.css)
    config.assets.precompile += %w(bootstrap.js)
    config.assets.precompile += %w(touchSwipe.min.js)
    config.assets.precompile += %w(jquery.blueimp-gallery.min.js)
    config.assets.precompile += %w(script.js)
    config.assets.precompile += %w(respond.js)
    config.assets.precompile += %w(wow.min.js)
    config.assets.precompile += %w(bootstrap.min.css)
  end
end
