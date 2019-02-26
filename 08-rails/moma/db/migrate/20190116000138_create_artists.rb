class CreateArtists < ActiveRecord::Migration[5.2]
  def change
    create_table :artists do |t|
      t.text :name
      t.text :nationality
      t.date :birth
      t.text :period
      t.text :image

      t.timestamps # This gives you 2 columns, one called created_at, one called updated_at
    end
  end
end
