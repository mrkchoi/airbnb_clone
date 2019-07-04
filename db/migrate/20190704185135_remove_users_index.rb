class RemoveUsersIndex < ActiveRecord::Migration[5.2]
  def change
    remove_index :users, :email
    remove_index :users, :session_token
    remove_index :users, :username
  end
end
