# encoding: utf-8

class PdfsondageUploader < CarrierWave::Uploader::Base

  permissions 0777
  storage :file

  def store_dir
    "uploads/#{model.class.to_s.underscore}/#{mounted_as}/#{model.id}"
  end

  def extension_white_list
     %w(pdf)
  end

end
