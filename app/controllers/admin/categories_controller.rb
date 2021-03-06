class Admin::CategoriesController < Admin::AdminController

  def index
    @categories = Category.all
  end

  def show
    @category = Category.friendly.find(params[:id])
  end

  def edit
    @category = Category.friendly.find(params[:id])
  end

  def update
    @category = Category.friendly.find(params[:id])
    if @category.update_attributes(category_params)
      flash[:notice] = "La mise à jour à été effectuée"
      flash[:class]= "success"
      redirect_to admin_categories_path
    else
      flash[:notice] = "Erreur lors de la mise à jour"
      flash[:class]= "danger"
      redirect_to :back
    end
  end

  def new
    @category = Category.new
  end

  def create
    @category = Category.new
    if request.post?
      @category = Category.new category_params
      if @category.valid?
        if @category.save
          flash[:notice] ="Votre catégorie a été ajouté."
          flash[:class] ="success"
          @category = nil
          redirect_to admin_categories_path
        else
          flash[:notice] = "Une erreur est survenue lors de l'ajout de votre catégorie"
          flash[:class] = "danger"
          redirect_to :back
        end
      else
        flash[:notice] = "Formulaire invalide"
        flash[:class]= "danger"
        redirect_to :back
      end
    end
  end

  def destroy
    @category = Category.friendly.find(params[:id])
    if Project.where(category: @category).last || Article.where(category: @category).last
      flash[:notice] = "Suppression impossible: catégorie utilisée"
      flash[:class] = "danger"
      redirect_to :back
    else
      @category.destroy
      flash[:notice] = "Suppression de la catégorie enregistrée"
      flash[:class] = "success"
      redirect_to :back
    end
  end

  private

  def category_params
    params.require(:category).permit(:id, :name, :icon, :color,:image)
  end

end
