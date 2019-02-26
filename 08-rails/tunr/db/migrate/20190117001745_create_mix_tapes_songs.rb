class CreateMixTapesSongs < ActiveRecord::Migration[5.2]
  def change
    create_table :mix_tapes_songs, :id => false do |t|
      t.integer :mix_tape_id
      t.integer :song_id
    end
  end
end
