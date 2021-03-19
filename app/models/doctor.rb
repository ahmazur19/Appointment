class Doctor < ApplicationRecord
	has_many :appointments
	has_many :patients, :through =>:appointments

	def get_doctors_with_appointments
		self.appointments.map do |appointment|
			appointment = self.appointments.find_by(doctor_id: self.id)
         {appointment: appointment}
		end
	
	end
end
