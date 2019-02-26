class CreateMixTapes < ActiveRecord::Migration[5.2]
  def change
    create_table :mix_tapes do |t|
      t.text :title
      t.integer :user_id

      t.timestamps
    end
  end
end
