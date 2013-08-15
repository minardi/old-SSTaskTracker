class ItemsListsController < ApplicationController
  before_action :set_items_list, only: [:show, :edit, :update, :destroy]

  # GET /items_lists
  # GET /items_lists.json
  def index
    @items_lists = ItemsList.all
  end

  # GET /items_lists/1
  # GET /items_lists/1.json
  def show
  end

  # GET /items_lists/new
  def new
    @items_list = ItemsList.new
  end

  # GET /items_lists/1/edit
  def edit
  end

  # POST /items_lists
  # POST /items_lists.json
  def create
    @items_list = ItemsList.new(items_list_params)

    respond_to do |format|
      if @items_list.save
        format.html { redirect_to @items_list, notice: 'Items list was successfully created.' }
        format.json { render action: 'show', status: :created, location: @items_list }
      else
        format.html { render action: 'new' }
        format.json { render json: @items_list.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /items_lists/1
  # PATCH/PUT /items_lists/1.json
  def update
    respond_to do |format|
      if @items_list.update(items_list_params)
        format.html { redirect_to @items_list, notice: 'Items list was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: 'edit' }
        format.json { render json: @items_list.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /items_lists/1
  # DELETE /items_lists/1.json
  def destroy
    @items_list.destroy
    respond_to do |format|
      format.html { redirect_to items_lists_url }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_items_list
      @items_list = ItemsList.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def items_list_params
      params.require(:items_list).permit(:number, :date, :random)
    end
end
