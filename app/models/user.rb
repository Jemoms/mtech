class User < ActiveRecord::Base

  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :confirmable, :validatable
  devise :omniauthable, :omniauth_providers => [:facebook, :google_oauth2, :twitter]
  mount_uploader :avatar, AvatarUploader

  has_many :projects, foreign_key: "owner_id"
  has_many :comments
  has_many :surveysResponses, class_name: "SurveysResponse"
  has_many :likes

  validates_presence_of :city, :cp, :username, :email, :country, :territory_attachment, :first_name, :last_name, :message => "Ce champ est obligatoire"
  validates_uniqueness_of :email, :username, :message => "Déjà utilisé"

  def self.from_omniauth(auth)
    where(provider: auth.provider, uid: auth.uid).first_or_create do |user|
      user.email = auth.info.email
      user.password = Devise.friendly_token[0,20]
      user.username = auth.info.name   # assuming the user model has a name
      user.remote_avatar_url = auth.info.image # assuming the user model has an image
    end
  end

  def self.new_with_session(params, session)
    super.tap do |user|
      if data = session["devise.facebook_data"] && session["devise.facebook_data"]["extra"]["raw_info"]
        user.email = data["email"] if user.email.blank?
      end
    end
  end

end