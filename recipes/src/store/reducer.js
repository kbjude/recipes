
const initialState = {
    'Melt-in-Your-Mouth Chuck Roast': [
        '1 can (14-1/2 ounces) Italian stewed tomatoes, undrained',
        '1/2 cup beef broth',
        '1/2 cup ketchup',
        '3 tablespoons brown sugar',
        '2 tablespoons Worcestershire sauce',
        '4 teaspoons prepared mustard',
        '3 garlic cloves, minced',
        '1 tablespoon soy sauce'
            ],
    'Beef and Mushrooms with Smashed Potatoes': [
        '1-1/2 pounds red potatoes (about 6 medium), cut into 1-1/2-inch pieces',
        '1 pound ground beef',
        '1/2 pound sliced fresh mushrooms',
        '1 medium onion, halved and sliced',
      '  3 tablespoons all-purpose flour'
            ],
    'Beef and Mushrooms with Smashed Potatoes': [
        '1 package (16 ounces) Velveeta, cubed',
        '2 cups shredded Mexican cheese blend',
        '2 cups shredded white cheddar cheese',
        '1-3/4 cups whole milk',
        '1 can (12 ounces) evaporated milk'
            ],

}

const Reducer = (state = initialState, action) => {
    const newState = { ...state };
    return newState;
}