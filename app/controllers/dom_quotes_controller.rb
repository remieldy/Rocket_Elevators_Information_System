class DomQuotesController < ApplicationController
  before_action :set_dom_quote, only: [:show, :edit, :update, :destroy]

  # GET /dom_quotes
  # GET /dom_quotes.json
  def index
    @dom_quotes = DomQuote.all
  end

  # GET /dom_quotes/1
  # GET /dom_quotes/1.json
  def show
  end

  # GET /dom_quotes/new
  def new
    @dom_quote = DomQuote.new
  end

  # GET /dom_quotes/1/edit
  def edit
  end

  # POST /dom_quotes
  # POST /dom_quotes.json
  def create
    @dom_quote = DomQuote.new(dom_quote_params)

    respond_to do |format|
      if @dom_quote.save
        format.html { redirect_to @dom_quote, notice: 'Dom quote was successfully created.' }
        format.json { render :show, status: :created, location: @dom_quote }
      else
        format.html { render :new }
        format.json { render json: @dom_quote.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /dom_quotes/1
  # PATCH/PUT /dom_quotes/1.json
  def update
    respond_to do |format|
      if @dom_quote.update(dom_quote_params)
        format.html { redirect_to @dom_quote, notice: 'Dom quote was successfully updated.' }
        format.json { render :show, status: :ok, location: @dom_quote }
      else
        format.html { render :edit }
        format.json { render json: @dom_quote.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /dom_quotes/1
  # DELETE /dom_quotes/1.json
  def destroy
    @dom_quote.destroy
    respond_to do |format|
      format.html { redirect_to dom_quotes_url, notice: 'Dom quote was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_dom_quote
      @dom_quote = DomQuote.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def dom_quote_params
      params.require(:dom_quote).permit(:FullName, :PhoneNumber, :NumberApp, :NumberFloor, :NumberBasement, :NumberDistinct, :NumberParking, :MaxPersonFloor, :NumberTrades, :NumberCages, :HrActivity, :ID)
    end
end
