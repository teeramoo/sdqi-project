class UserMailer < ApplicationMailer
  #default from: user.email

  def feedback(user, feedback)
    @recipient_email = "st117742@ait.ac.th"
    @user_name = user
    @body = feedback
    mail(to: "st117742@ait.ac.th",
         body: feedback,
         subject: 'Feedback')
  end

  def reservations(user, reservation)
    @reservation_user = user
    @body = reservation
    mail(to:  "st117742@ait.ac.th",
         body: reservation,
         subject: 'Reservation')
  end

end