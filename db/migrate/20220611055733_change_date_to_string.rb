class ChangeDateToString < ActiveRecord::Migration[7.0]
  def change
    change_column :mileages, :date, :string
  end
end
