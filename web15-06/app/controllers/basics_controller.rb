class BasicsController < ApplicationController

  require 'nokogiri'
  require 'open-uri'
  
  def plsql_solution
  end

  def quotations

    if params[:quotation]
      @quotation = Quotation.new(params[:quotation])

      if @quotation.save
        flash[:notice]  = 'Quotation was successfully created.'
        @quotation = Quotation.new
      end
    else
      @quotation = Quotation.new

    end

    if cookies[:values].blank?
    if params[:sort_by]  == "date"

     #@quotations = Quotation.find(:order => :created_at)
      @quotations = Quotation.all.order(:created_at)

    else
      @quotations = Quotation.all.order(:category)
    end
    else

      @quotations = Quotation.all.where("id NOT IN (#{cookies[:values]})").order(:category)

      end

    # if params[:search]
    #
    #   key = "%#{search}%"
    #   @quotations = Quotation.where('author_name LIKE :search
    #                 OR category LIKE :search OR quote LIKE :search',search: key)
    #
    # end

      # if cookies[:values].nil?
      #
      # @quotations = Quotation.all
      #
      #  else
      #
      #    cookies[:values] ? cookies[:values].split(".") : []
      #    #@quotations = Quotation.where.not('id: array', :array => "#{cookies[:values]}")
      #    ids_to_exclude = cookies[:values]
      #    quotation_table = Arel::Table.new(:quotations)
      #    @quotations = Quotation.where(quotation_table[:id].not_in ids_to_exclude)
      #
      #
      # end
  end


  def create

    if params[:quotation]
      @quotation = Quotation.new(quotation_parameters)

    respond_to do |format|
      if @quotation.save

        @quotation = Quotation.new
        format.html { redirect_to basics_quotations_path, flash[:notice] => "Quotation was successfully created." }	
	
      else
        format.html { render :quotations, flash[:notice] => "Invalid input" }
        render quotations
      end

    end
    else
      @quotation = Quotation.new

    end
  end

  private

  def quotation_parameters

    params.require(:quotation).permit(:author_name, :category, :quote)

  end

  public

  def categories

    #@category = Quotation.uniq.pluck(:category)
    @quotations = Quotation.where(category: params[:category_name]) if params[:category_name].present?
  end

  def search_function

       # @results = Quotation.where('author_name LIKE :search
       #                OR category LIKE :search OR quote LIKE :search', :search => "%#{params[:search]}%")



       @results = Quotation.where('Lower(author_name) LIKE Lower(:search)
                      OR Lower(category) LIKE Lower(:search) OR Lower(quote) LIKE :search', :search => "%#{params[:search]}%")

  end

  def kill_values

      values = params[:id]

      if cookies[:values].blank?

        cookies[:values] = params[:id]
        @quotations = Quotation.where('id != :id', :id => "#{params[:id]}")


     else

        #cookies[:values] = (values.class == Array) ? values.join(',') : ''
        cookies[:values] += "," + params[:id]
        @quotations = Quotation.where('id != :id', :id => "#{params[:id]}")

      end
   end

  # def get_values
  #
  #     if cookies[:values].nil?
  #
  #       render :quotations
  #
  #     end
  #     else
  #
  #     cookies[:values] ? cookies[:values].split(".") : []
  #
  #     cookies[:values].each do |id|
  #
  #     @quotations = Quotation.where('id' == id)
  #
  #     end
  #
  #     redirect_to @quotations
  #
  # end

  def clear_cookies

    cookies.delete :values
    redirect_to :action => :quotations

  end

  def export_xml

    #...so code for exporting the quotation goes here.....
    @quotations = Quotation.all
    xml_string = @quotations.to_xml
    render :xml => @quotations.to_xml
    #   file = File.open('/basics/xml_export.xml', 'w')
    #   file.write(@quotations.to_xml)
    #   file.close
    #  # render :file => file
    # s = render_to_string :file => '/basics/xml_export.xml'
    # File.open('fixed.xml','w'){
    #   |f| f.write s
    # }
    # render :text => s

  end



  def export_json

    #...so code for exporting to json format foes here...
    # respond_to do |format|
    #
    #   @quotations = Quotation.all
    #   format.json{render :json => @quotations.to_json, :only => [:author_name, :category, :quote]}
    #
    # end

    @quotations = Quotation.all
    render :json => @quotations.to_json

  end

  def import_server

    #...code for importing xml report generated from another server...
    parse_url = Nokogiri::XML(open(params[:url]))
    parse_url.xpath('//quotations/quotation').each do |row|

      @quotation = Quotation.new
      @quotation.author_name = row.xpath('author_name').inner_text
      @quotation.category = row.xpath('category').inner_text
      @quotation.quote = row.xpath('quote').inner_text
      @quotation.save
      redirect_to basics_quotation_path


    end

  end

end
