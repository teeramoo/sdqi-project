FactoryGirl.define do
  factory :user, class: User do
    email "user@gmail.com"
    password "password123"
    password_confirmation "password123"
  end

  factory :admin, class: User do
    email "superadmin@gmail.com"
    password "admin123"
    password_confirmation "admin123"
    role_id 1
  end

  factory :vendor, class: User do
    email "factoryvendor@gmail.com"
    password "vendorpassword"
    password_confirmation "vendorpassword"
    role_id 3
  end

  factory :role, class:Role do
    name "Admin"
  end

  factory :item, class:Item do
    name "chop"
    price 10
    description "delicious chop from potato"
    category_id 1
  end

  factory :category, class:Category do
    name "dinner"
  end

  factory :vote, class:Vote do
    upvote true
    downvote false
  end

  factory :comment, class:Comment do
    comment_text "this is the comment text"
    user_id 1
    item_id 1
  end
end