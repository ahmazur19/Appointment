class Doctor < ApplicationRecord
	has_many :appointments, :dependent => :delete_all
	has_many :patients, :through =>:appointments

	def get_doctors_with_appointments
		self.appointments.map do |appointment|
			appointment = self.appointments
         {appointment: appointment}
		end
	
	end
end
