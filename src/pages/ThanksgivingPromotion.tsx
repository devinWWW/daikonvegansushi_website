import React from 'react';

const ThanksgivingPromotion: React.FC = () => {
  const MenuItem = ({ title, description }: { title: string; description: string }) => (
    <div className="border-b border-neutral-cream pb-4 last:border-b-0">
      <h4 className="text-lg font-heading font-semibold text-primary-green mb-2">
        {title}
      </h4>
      <p className="text-dark-green font-body text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: description }} />
    </div>
  );

  return (
    <div className='min-h-screen pt-24 pb-20 bg-neutral-cream'>
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        {/* Page Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-accent-gold text-white px-6 py-2 rounded-full font-heading font-bold text-sm mb-4">
            SPECIAL THANKSGIVING MENU
          </div>
          <h1 className="text-5xl md:text-6xl font-heading font-bold text-primary-green mb-4">
            A Vegan Thanksgiving Feast
          </h1>
          <p className="text-2xl text-secondary-coral font-heading font-bold mb-4">
            $45 per person
          </p>
          <p className="text-xl text-dark-green font-body max-w-3xl mx-auto">
            Celebrate gratitude and compassion with our special Thanksgiving set menu.
            Choose from our signature dishes at both Basil Vegan Thai & Sushi and Daikon Vegan Sushi.
          </p>
        </div>

        {/* Reservation Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a
            href="https://rewards.vegansushilv.com/book/basil"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-secondary-coral hover:bg-secondary-coral-dark text-white font-body font-semibold px-10 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg text-center"
          >
            Reserve at Basil
          </a>
          <a
            href="https://rewards.vegansushilv.com/book/daikon"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary-green hover:bg-opacity-90 text-white font-body font-semibold px-10 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg text-center"
          >
            Reserve at Daikon
          </a>
        </div>

        {/* Basil Menu Section */}
        <div className="bg-white rounded-lg shadow-xl p-8 md:p-12 mb-12">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-heading font-bold text-primary-green mb-2">
              Basil Vegan Thai & Sushi
            </h2>
            <p className="text-dark-green font-body mb-4">
              <a
                href="https://basilveganthai.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary-coral hover:underline"
              >
                basilveganthai.com
              </a>
            </p>
            <a
              href="https://rewards.vegansushilv.com/book/basil"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-secondary-coral hover:bg-secondary-coral-dark text-white font-body font-semibold px-8 py-3 rounded-lg transition-all duration-300 shadow-md"
            >
              Book Your Table
            </a>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Harvest Starters */}
            <div className="space-y-4">
              <h3 className="text-2xl font-heading font-bold text-primary-green border-b-2 border-secondary-coral pb-2 mb-4">
                Harvest Starters
                <span className="text-sm font-body text-dark-green font-normal block mt-1">(Choose one)</span>
              </h3>
              <MenuItem
                title="Spring Roll"
                description="Crispy fried rolls with mixed vegetables. A light, fresh start to your feast."
              />
              <MenuItem
                title="Veggie Fritters"
                description="Hearty, fried fritters featuring a blend of <strong>eggplant, daikon, carrots, celery, corn, flour, and oatmeal</strong>."
              />
              <MenuItem
                title='"Calamari"'
                description='Festive <strong>deep fried oyster mushroom</strong> seasoned with salt and pepper, a savory holiday treat.'
              />
              <MenuItem
                title="Seaweed Salad"
                description="<strong>Assorted seaweed in chef's sauce</strong>. (GF, OF, NF)"
              />
            </div>

            {/* Seasonal Sushi Rolls */}
            <div className="space-y-4">
              <h3 className="text-2xl font-heading font-bold text-primary-green border-b-2 border-secondary-coral pb-2 mb-4">
                Seasonal Sushi Rolls
                <span className="text-sm font-body text-dark-green font-normal block mt-1">(Choose one)</span>
              </h3>
              <MenuItem
                title="Spicy Jack"
                description="A vibrant roll with <strong>Oshinko, cucumber, and avocado</strong> inside, topped with a mixture of <strong>spicy jackfruit</strong>, a touch of <strong>ponzu, balsamic glaze, and sesame seeds</strong>."
              />
              <MenuItem
                title="Lucky Red"
                description="<strong>Jackfruit salad and cucumber</strong> inside, crowned with <strong>roasted tomato, la-yu, sweet soy, and green onions</strong>—a roll as colorful as autumn leaves."
              />
              <MenuItem
                title="Yuba"
                description='Roll with <strong>fried yuba (tofu skin), avocado, and carrots</strong> inside, topped with <strong>plant-based "Tuna", avocado, sesame mayo sauce, and sesame seeds</strong>.'
              />
              <MenuItem
                title="Spooky"
                description="A playful roll with <strong>King oyster mushroom, cilantro, and jalapeno</strong> inside, topped with <strong>inari, bell pepper, wasabi mayo, and house chili sauce</strong>."
              />
            </div>

            {/* Main Course Comfort */}
            <div className="space-y-4">
              <h3 className="text-2xl font-heading font-bold text-primary-green border-b-2 border-secondary-coral pb-2 mb-4">
                Main Course Comfort
                <span className="text-sm font-body text-dark-green font-normal block mt-1">(Choose one)</span>
              </h3>
              <MenuItem
                title="Tom Yum Fried Rice"
                description="A warm, spicy, and sour Thai classic. Fried rice with <strong>fried tofu, green beans, mushrooms, tofu, Thai basil, jalapeno, garlic, and white onions</strong>."
              />
              <MenuItem
                title="Japanese Katsu"
                description="A satisfying vegan cutlet, breaded and deep-fried to a golden, comforting crisp."
              />
              <MenuItem
                title="Curry Ramen"
                description="A rich, warming <strong>Coconut milk-based Curry Soup Base</strong> with ingredients including <strong>eggplant balls, fried yuba, cabbage, and green onions</strong>—perfect for a chilly evening."
              />
              <MenuItem
                title="Eggplant Tofu Rice"
                description="A comforting dish of eggplant and tofu stir-fried with rice, often with a savory sauce and basil."
              />
            </div>

            {/* Sweet Endings */}
            <div className="space-y-4">
              <h3 className="text-2xl font-heading font-bold text-primary-green border-b-2 border-secondary-coral pb-2 mb-4">
                Sweet Endings
                <span className="text-sm font-body text-dark-green font-normal block mt-1">(Choose one)</span>
              </h3>
              <MenuItem
                title="Mango Sticky Rice"
                description="A classic Thai dessert: <strong>Sweet coconut milk-coated sticky rice with mango compote</strong>."
              />
              <MenuItem
                title="Lemon Bar"
                description="A bright, refreshing finish: <strong>Gluten-free vanilla crust, vegan lemon curd with meringue</strong>."
              />
              <MenuItem
                title="Molten Cake"
                description="Rich <strong>dark chocolate molten cake</strong> topped with powdered sugar—a decadent holiday dessert."
              />
            </div>
          </div>
        </div>

        {/* Daikon Menu Section */}
        <div className="bg-white rounded-lg shadow-xl p-8 md:p-12 mb-12">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-heading font-bold text-primary-green mb-2">
              Daikon Vegan Sushi
            </h2>
            <p className="text-dark-green font-body mb-4 text-lg">
              A Thanksgiving Gathering: Sushi & More
            </p>
            <a
              href="https://rewards.vegansushilv.com/book/daikon"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary-green hover:bg-opacity-90 text-white font-body font-semibold px-8 py-3 rounded-lg transition-all duration-300 shadow-md"
            >
              Book Your Table
            </a>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Appetizers */}
            <div className="space-y-4">
              <h3 className="text-2xl font-heading font-bold text-primary-green border-b-2 border-secondary-coral pb-2 mb-4">
                Appetizers: Shared Joy
                <span className="text-sm font-body text-dark-green font-normal block mt-1">(Choose one)</span>
              </h3>
              <MenuItem
                title="Spring Roll"
                description="Crispy fried rolls with mixed vegetables. A perfect bite to start your meal."
              />
              <MenuItem
                title="Monster Ball"
                description="A savory, deep-fried <strong>potato ball</strong> in a rich sauce—a comforting, unexpected delight."
              />
              <MenuItem
                title='"Calamari"'
                description='<strong>Deep fried oyster mushroom</strong> seasoned with salt and pepper, a savory holiday treat.'
              />
              <MenuItem
                title="Seaweed Salad"
                description="<strong>Assorted seaweed in chef's sauce</strong>. (GF, OF)"
              />
            </div>

            {/* Sushi Rolls */}
            <div className="space-y-4">
              <h3 className="text-2xl font-heading font-bold text-primary-green border-b-2 border-secondary-coral pb-2 mb-4">
                Sushi Rolls: Festive Flavors
                <span className="text-sm font-body text-dark-green font-normal block mt-1">(Choose one)</span>
              </h3>
              <MenuItem
                title="Spicy Jack"
                description="A roll with <strong>Oshinko, cucumber, and avocado</strong> inside, topped with a mixture of <strong>spicy jackfruit</strong>, a touch of <strong>ponzu, balsamic glaze, and sesame seeds</strong>."
              />
              <MenuItem
                title="Lucky Red"
                description="<strong>Jackfruit salad and cucumber</strong> inside, crowned with <strong>roasted tomato, la-yu, sweet soy, and green onions</strong>—a roll as colorful as autumn leaves."
              />
              <MenuItem
                title="Yuba"
                description='Roll with <strong>fried yuba (tofu skin), avocado, and carrots</strong> inside, topped with <strong>plant-based "Tuna", avocado, sesame mayo sauce, and sesame seeds</strong>.'
              />
              <MenuItem
                title="Spooky"
                description="A playful roll with <strong>King oyster mushroom, cilantro, and jalapeno</strong> inside, topped with <strong>inari, bell pepper, wasabi mayo, and house chili sauce</strong>."
              />
            </div>

            {/* Entrées */}
            <div className="space-y-4">
              <h3 className="text-2xl font-heading font-bold text-primary-green border-b-2 border-secondary-coral pb-2 mb-4">
                Entrées: Hearty & Warm
                <span className="text-sm font-body text-dark-green font-normal block mt-1">(Choose one)</span>
              </h3>
              <MenuItem
                title="Basil Fried Rice"
                description='Aromatic jasmine rice wok-fried with a signature <strong>spicy "pork" blend of chopped mushrooms and seitan</strong>, <strong>cabbage, carrots, tomato, Thai basil, jalapeno, tofu, and garlic</strong>.'
              />
              <MenuItem
                title="Japanese Katsu"
                description="A satisfying vegan cutlet, breaded and deep-fried to a golden, comforting crisp."
              />
              <MenuItem
                title="Curry Ramen"
                description="A rich, warming <strong>Coconut milk-based Curry Soup Base</strong> with ingredients including <strong>eggplant balls, fried yuba, cabbage, and green onions</strong>—perfect for a chilly evening."
              />
              <MenuItem
                title="Teriyaki"
                description="<strong>Fried stuffed yuba (tofu skin)</strong> served with <strong>broccoli, white onion, and carrots</strong> in a sweet and savory teriyaki sauce."
              />
            </div>

            {/* Desserts */}
            <div className="space-y-4">
              <h3 className="text-2xl font-heading font-bold text-primary-green border-b-2 border-secondary-coral pb-2 mb-4">
                Desserts: Sweet Gratitude
                <span className="text-sm font-body text-dark-green font-normal block mt-1">(Choose one)</span>
              </h3>
              <MenuItem
                title="Fried Banana"
                description="A warm, sweet finish: <strong>Fried banana</strong> served with <strong>chocolate syrup, salted coconut caramel, and sugar powder</strong>."
              />
              <MenuItem
                title="Lemon Bar"
                description="A bright, refreshing finish: <strong>Gluten-free vanilla crust, vegan lemon curd with meringue</strong>."
              />
              <MenuItem
                title="Molten Cake"
                description="Rich <strong>dark chocolate molten cake</strong> topped with powdered sugar—a decadent holiday dessert."
              />
            </div>
          </div>
        </div>

        {/* Important Information */}
        <div className="bg-primary-green text-white rounded-lg p-8 md:p-12 mb-12">
          <h2 className="text-3xl font-heading font-bold text-center mb-8">
            Important Information
          </h2>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl font-heading font-bold text-accent-gold mb-2">
                $45
              </div>
              <p className="text-neutral-cream font-body text-lg">
                Per Person
              </p>
            </div>

            <div>
              <div className="text-2xl font-heading font-bold text-accent-gold mb-2">
                Reservations Required
              </div>
              <p className="text-neutral-cream font-body">
                Book your table early to secure your spot
              </p>
            </div>

            <div>
              <div className="text-2xl font-heading font-bold text-accent-gold mb-2">
                Dietary Notes
              </div>
              <p className="text-neutral-cream font-body text-sm">
                <strong>GF:</strong> Gluten-Free<br/>
                <strong>OF:</strong> Oil-Free<br/>
                <strong>NF:</strong> Nut-Free<br/>
                <span className="text-xs block mt-2">Please inform your server of any allergies</span>
              </p>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center bg-neutral-cream p-8 md:p-12 rounded-lg">
          <h2 className="text-3xl font-heading font-bold text-primary-green mb-4">
            Reserve Your Thanksgiving Table Today
          </h2>
          <p className="text-xl text-dark-green font-body mb-8 max-w-2xl mx-auto">
            Celebrate this Thanksgiving with compassionate, plant-based cuisine that honors both gratitude and life.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <a
              href="https://rewards.vegansushilv.com/book/basil"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-secondary-coral hover:bg-secondary-coral-dark text-white font-body font-semibold px-10 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Book at Basil Vegan Thai & Sushi
            </a>
            <a
              href="https://rewards.vegansushilv.com/book/daikon"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary-green hover:bg-opacity-90 text-white font-body font-semibold px-10 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Book at Daikon Vegan Sushi
            </a>
          </div>

          <p className="text-dark-green font-body italic">
            Happy Thanksgiving from Basil Vegan Thai & Sushi and Daikon Vegan Sushi!
          </p>
        </div>
      </div>
    </div>
  );
};

export default ThanksgivingPromotion;
