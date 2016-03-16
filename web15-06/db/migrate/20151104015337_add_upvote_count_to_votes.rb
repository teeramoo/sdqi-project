class AddUpvoteCountToVotes < ActiveRecord::Migration
  def change
    add_column :votes, :upvote_count, :integer
  end
end
