# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
 
Appointment.destroy_all
Patient.destroy_all
Doctor.destroy_all

10.times do |i|

	doctor = Doctor.create(name: Faker::Name.name)
	patient = Patient.create(name: Faker::Name.name)

	5.times do |i|

	Appointment.create(doctor_id:doctor.id, patient_id:patient.id)
	end
end

