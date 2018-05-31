# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Notebook.destroy_all
Note.destroy_all
Tag.destroy_all
Tagging.destroy_all


4.times do 
  notebook = Notebook.new(
    name: Faker::StarWars.character,
    user_id: User.find_by(username: 'alex').id
  )
  notebook.save!
end 

15.times do 
  note = Note.new(
    title: Faker::StarWars.planet,
    body: Faker::StarWars.quote,
    notebook_id: User.find_by(username: 'alex').notebooks.order("RANDOM()").first.id
  )
  note.save!
end 

12.times do 
  tag = Tag.new(
    name: Faker::StarWars.unique.specie,
    user_id: User.find_by(username: 'alex').id
  )
  tag.save!
end 

User.find_by(username: 'alex').tags.each do |tag|
  tagging = Tagging.new(note_id: User.find_by(username: 'alex').notes.order('RANDOM()').limit(1).first.id, tag_id: tag.id)
  tagging.save!
end 