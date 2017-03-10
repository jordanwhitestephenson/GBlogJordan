const transformer = require('knex-csv-transformer').transformer;
const transfomerHeader = require('knex-csv-transformer').transfomerHeader;
const path = require('path');

exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('blog').del()
        .then(function() {
            // Inserts seed entries
            return knex('blog').insert([
                {

                    name: 'Jordan Stephenson',
                    title: 'Cat Recipe',
                    body: 'Before I had Simon I had gotten all the emails and read all the lists on what you needed to pack in your hospital bag and what things you needed at home. I thought I was set, and I figured if there was anything I was missing once he arrived, Id just pop ou  of the house and pick it up from the store. Well none of those lists prepared me for the excruciating healing process my body was going to be experiencing the months after delivery',
                    username_id: knex('username').where('email', 'jordanwhitestephenson@gmail.com').select('id')
      },
                {
                    name: 'Earnest White',
                    title: 'Talkin about My Best',
                    body: 'LorePeople let me tell you ‘bout my best friend He’ s a warm - hearted person who’ ll lovemeto the endPeoplelet me tell you‘ bout my best friend He’ s a one boy cuddly toy my up my down my pride and joy People let me tell you now he’s so much fun Whether we’ re talking man to man Or whether we’ re talking son to son Cause he’ s my best friend now.',
                    username_id: knex('username').where('email', 'Ernest@okstate.edu').select('id')
      },
                {
                    name: 'Jack Black',
                    title: 'Cheese and Wine',
                    body: 'Douglas Hillstrom makes a bold prediction: “Looking ahead, say twenty years from now… The Finger Lakes will become known as a Santa Clara University professors Lucia and John Gilbert highlight 47 of “California’ s Trailblazing Women Winemakers” from 1965 to 1984.Condé Nast Traveler looks at how women winemakers are changing the way we drink wine. Purple Pages,Richard Hemming explores alternatives to tasting notes.“Perhaps wine needs its own language;aset of original words that provides a precise,holistic description of wine… What about pictures ?',
                    username_id: knex('username').where('email', 'jack.black@gmail.com').select('id')
    }
      ]);
        });
};




// exports.seed = transformer.seed({
//   table: 'blog',
//   transformers: [
//     transfomerHeader('created_at', function(value) {
//       return moment('created_at', "DD/MM/YYYY", 'fr', true)
//       // format('YYYY-MM-DDT00:00:00');
//   })]
// });
