class Veggie

	def initialize(name, color, nutrition)
		@name = name
		@color = color
		@nutrition = nutrition 
	end

	def eat_me
		if nutrition <= 5
			puts "Eat me now !"
		else
			puts "I am a very poor veggie."
		end
	end

end


tomo = Veggie.new("Tomato", "red", 10)

tomo.eat_me 