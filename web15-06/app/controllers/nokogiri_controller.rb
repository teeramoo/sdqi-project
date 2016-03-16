class NokogiriController < ApplicationController

  def Index
  end

  def parse
    
    require 'open-uri'
    require 'rubygems'
    require 'nokogiri'
    
    #.....changes made for proxy settings...
    #proxy_host = '192.41.170.23'
    #proxy_port = 3128
    
    #proxy = Net::HTTP::Proxy(proxy_host,proxy_port)
    #proxy.start('www.spectrum.ieee.org'){ |http|    

    @MainLink= "http://spectrum.ieee.org"
    #html = Nokogiri::HTML(open("http://www.spectrum.ieee.org").read)
    html = Nokogiri::HTML(open("http://www.spectrum.ieee.org",:proxy =>"http://192.41.170.23:3128").read)    

    html.search('//p').each do |node|
      node.remove
    end

    html.search('//article/a').each do |node|
      @article_link = node.attributes["href"].value
      node.attributes["href"].value = @MainLink + @article_link
    end

    html.search('//figcaption').each do |node|
    node.remove
    end

    html.search('//img').each do |node|
    @img_tag = node.attributes["src"].value
    if (@img_tag == "/assets/img/x.gif")
      @img_tag = node.attributes["data-original"].value
    end
    node.attributes["src"].value = @MainLink + @img_tag


    puts html

    @TitleList = html.xpath("//div/article")
    @TitleList.each_with_index do |link|
        
      end
    
    end
    #....close the http connection throuch proxy...the following bracket is for closing the { befor |http| conection....
    #}
  end
end

