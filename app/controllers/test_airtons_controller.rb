class TestAirtonsController < ApplicationController
  before_action :set_test_airton, only: [:show, :edit, :update, :destroy]

  # GET /test_airtons
  # GET /test_airtons.json
  def index
    @test_airtons = TestAirton.all
  end

  # GET /test_airtons/1
  # GET /test_airtons/1.json
  def show
  end

  # GET /test_airtons/new
  def new
    @test_airton = TestAirton.new
  end

  # GET /test_airtons/1/edit
  def edit
  end

  # POST /test_airtons
  # POST /test_airtons.json
  def create
    @test_airton = TestAirton.new(test_airton_params)

    respond_to do |format|
      if @test_airton.save
        format.html { redirect_to @test_airton, notice: 'Test airton was successfully created.' }
        format.json { render :show, status: :created, location: @test_airton }
      else
        format.html { render :new }
        format.json { render json: @test_airton.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /test_airtons/1
  # PATCH/PUT /test_airtons/1.json
  def update
    respond_to do |format|
      if @test_airton.update(test_airton_params)
        format.html { redirect_to @test_airton, notice: 'Test airton was successfully updated.' }
        format.json { render :show, status: :ok, location: @test_airton }
      else
        format.html { render :edit }
        format.json { render json: @test_airton.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /test_airtons/1
  # DELETE /test_airtons/1.json
  def destroy
    @test_airton.destroy
    respond_to do |format|
      format.html { redirect_to test_airtons_url, notice: 'Test airton was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_test_airton
      @test_airton = TestAirton.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def test_airton_params
      params.require(:test_airton).permit(:id, :nome)
    end
end
