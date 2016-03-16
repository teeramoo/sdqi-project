class Ability
  include CanCan::Ability

  def initialize(user)
    # Define abilities for the passed in user here. For example:
    #
    #   user ||= User.new # guest user (not logged in)
    #   if user.admin?
    #     can :manage, :all
    #   else
    #     can :read, :all
    #   end
    #
    # The first argument to `can` is the action you are giving the user
    # permission to do.
    # If you pass :manage it will apply to every action. Other common actions
    # here are :read, :create, :update and :destroy.
    #
    # The second argument is the resource the user can perform the action on.
    # If you pass :all it will apply to every resource. Otherwise pass a Ruby
    # class of the resource.
    #
    # The third argument is an optional hash of conditions to further filter the
    # objects.
    # For example, here the user can only update published articles.
    #
    #   can :update, Article, :published => true
    #
    # See the wiki for details:
    # https://github.com/CanCanCommunity/cancancan/wiki/Defining-Abilities


    user ||= User.new #guest user not logged in..

    if user.admin?
      #...restrict them to change the start value generated from the data...
      can :manage, :all
    end

    if user.member?
      #....give them ability to post comment and upvote and downvote for reviews....
      can :read, :all
      can :manage, User, :id => user.id
      can :manage, Item
      cannot :ban, :users
      #...actually user should be able to read own username and role..and be able to change it..
      #.give that ability here and test using unite test..if thats working properly or not...
    end

    if user.vendor?

      can :read, :all
      can :manage, User, :id => user.id
      can :manage, Category
      can :manage, Item
      cannot :ban, :users
      #...vendor have special ability to change the items list, item price, todays special attraction..
      #..make sure that they have this ability through here and they are working properly using unit test..
    end

  else
      can :read, :all
  end
end
