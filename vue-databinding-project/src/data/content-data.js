const imagePath = path => {
  return require("../assets/images/" + path);
}

const data = {
    "site": {
        "footer": {
            "address": "Søndre havnegade 74<br>9000 Aalborg",
            "email": "<a href='contact@mysite.com'>contact@mysite.com</a>"
        }
    },
    "pages": [
        {
            "metaData":
            {
                "name": "Home",
                "template": "page",
            },
            "content": {
                "header": "Welcome",
                "image": imagePath("img1.jpg"),
                "text":
                    "<p>Aliquam sit amet sem ac ligula sodales suscipit vel in nulla. Vivamus sit amet faucibus justo, dictum vehicula urna. Cras dui orci, consectetur non risus nec, tincidunt rhoncus metus. Morbi et tempus elit. Fusce venenatis quam et metus malesuada, porttitor congue metus posuere. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse sit amet venenatis massa. Fusce nec odio porttitor, eleifend erat eget, scelerisque purus. Nulla facilisi. Integer viverra vulputate consectetur. Duis sit amet luctus quam. Mauris bibendum, metus sed lobortis imperdiet, nisi sapien aliquam lacus, ac elementum sapien tortor sit amet diam. Nullam et mi libero.</p>" +
                    "<quote>This they said in a sincere tone</quote>" +
                    "<p>Suspendisse nec fermentum ligula. Cras sagittis tristique neque, ut sollicitudin nunc lacinia vel. Proin volutpat consequat accumsan. Etiam vel justo turpis. Nullam finibus, erat eget cursus tempus, risus libero hendrerit sem, sed aliquam erat mi in elit. Vestibulum aliquam mi eros, eu tempus sem sagittis a. Nullam aliquam libero a sem placerat, eget rutrum nisl feugiat. Quisque in maximus sem, vel rhoncus orci. Donec condimentum leo erat, at rutrum nunc egestas non. Nullam consectetur dictum ante nec euismod. In nibh dui, euismod a rhoncus sed, congue vitae libero.</p>" +
                    "<p>Morbi porta maximus faucibus. Nulla mollis mollis ultricies. Nunc vel lectus mollis, faucibus tellus non, consequat nulla. Donec et rhoncus velit. Nam commodo placerat mauris, ut sagittis ipsum consectetur vestibulum. Duis quis turpis vel nisi venenatis imperdiet. Cras pretium semper scelerisque. Morbi lobortis fermentum massa, ac ultricies ex interdum sed. Mauris sit amet nulla venenatis, tincidunt dolor non, feugiat elit. Integer pellentesque ut diam at suscipit. Phasellus eget dolor euismod, varius orci nec, porta ligula. Sed convallis turpis mauris, at pellentesque nisl dictum sed.</p>" +
                    "<p>Phasellus facilisis dignissim enim, pharetra facilisis lectus luctus ac. Phasellus at porttitor orci. Ut ultricies massa risus, eu feugiat arcu bibendum ut. Etiam eu semper orci. Ut at accumsan sem. Praesent ut dui volutpat orci interdum tincidunt. Quisque tincidunt, nulla facilisis gravida varius, velit urna pretium tortor, eu viverra eros arcu vel ex. Duis lobortis scelerisque tellus, vitae dignissim erat eleifend sed.</p>" +
                    "<p>Nam rhoncus nisl eu ligula pharetra blandit. Phasellus accumsan odio eget scelerisque euismod. Phasellus condimentum dolor ante, ac scelerisque lectus efficitur ornare. In sagittis quis nibh eu euismod. Quisque mattis sodales euismod. Curabitur viverra ipsum eros, in varius lorem pharetra non. Sed nunc nunc, luctus nec sodales non, imperdiet et eros. Nam id ipsum interdum, molestie nisl ut, tristique massa. Sed in vestibulum mauris. Maecenas quis faucibus eros. Nulla porttitor, justo quis molestie sodales, neque magna mattis ex, a mollis velit ipsum sed justo. Maecenas congue orci purus, ut lobortis risus congue at. Integer congue elit ac justo mollis, sed maximus ex maximus. Maecenas sit amet felis a nisl malesuada lobortis.</p>"
            }
        },
        {
            "metaData":
            {
                "name": "News",
                "template": "news"
            },
            "content": {
                "header": "News",
                "image": imagePath("img5.jpg"),
                "text":
                    "<p>Morbi porta maximus faucibus. Nulla mollis mollis ultricies. Nunc vel lectus mollis, faucibus tellus non, consequat nulla. Donec et rhoncus velit. Nam commodo placerat mauris, ut sagittis ipsum consectetur vestibulum. Duis quis turpis vel nisi venenatis imperdiet. Cras pretium semper scelerisque. Morbi lobortis fermentum massa, ac ultricies ex interdum sed. Mauris sit amet nulla venenatis, tincidunt dolor non, feugiat elit. Integer pellentesque ut diam at suscipit. Phasellus eget dolor euismod, varius orci nec, porta ligula. Sed convallis turpis mauris, at pellentesque nisl dictum sed.</p>"
            }
        },
        {
            "metaData":
            {
                "name": "About us",
                "template": "page"
            },
            "content": {
                "header": "Info about us",
                "image": imagePath("img2.jpg"),
                "text":
                    "<p>Morbi porta maximus faucibus. Nulla mollis mollis ultricies. Nunc vel lectus mollis, faucibus tellus non, consequat nulla. Donec et rhoncus velit. Nam commodo placerat mauris, ut sagittis ipsum consectetur vestibulum. Duis quis turpis vel nisi venenatis imperdiet. Cras pretium semper scelerisque. Morbi lobortis fermentum massa, ac ultricies ex interdum sed. Mauris sit amet nulla venenatis, tincidunt dolor non, feugiat elit. Integer pellentesque ut diam at suscipit. Phasellus eget dolor euismod, varius orci nec, porta ligula. Sed convallis turpis mauris, at pellentesque nisl dictum sed.</p>" +
                    "<p>Aliquam sit amet sem ac ligula sodales suscipit vel in nulla. Vivamus sit amet faucibus justo, dictum vehicula urna. Cras dui orci, consectetur non risus nec, tincidunt rhoncus metus. Morbi et tempus elit. Fusce venenatis quam et metus malesuada, porttitor congue metus posuere. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse sit amet venenatis massa. Fusce nec odio porttitor, eleifend erat eget, scelerisque purus. Nulla facilisi. Integer viverra vulputate consectetur. Duis sit amet luctus quam. Mauris bibendum, metus sed lobortis imperdiet, nisi sapien aliquam lacus, ac elementum sapien tortor sit amet diam. Nullam et mi libero.</p>" +
                    "<p>Suspendisse nec fermentum ligula. Cras sagittis tristique neque, ut sollicitudin nunc lacinia vel. Proin volutpat consequat accumsan. Etiam vel justo turpis. Nullam finibus, erat eget cursus tempus, risus libero hendrerit sem, sed aliquam erat mi in elit. Vestibulum aliquam mi eros, eu tempus sem sagittis a. Nullam aliquam libero a sem placerat, eget rutrum nisl feugiat. Quisque in maximus sem, vel rhoncus orci. Donec condimentum leo erat, at rutrum nunc egestas non. Nullam consectetur dictum ante nec euismod. In nibh dui, euismod a rhoncus sed, congue vitae libero.</p>" +
                    "<p>Phasellus facilisis dignissim enim, pharetra facilisis lectus luctus ac. Phasellus at porttitor orci. Ut ultricies massa risus, eu feugiat arcu bibendum ut. Etiam eu semper orci. Ut at accumsan sem. Praesent ut dui volutpat orci interdum tincidunt. Quisque tincidunt, nulla facilisis gravida varius, velit urna pretium tortor, eu viverra eros arcu vel ex. Duis lobortis scelerisque tellus, vitae dignissim erat eleifend sed.</p>"
            }
        },
        {
            "metaData":
            {
                "name": "Weather",
                "template": "weather",
            },
            "content": {
                "header": "Weather forecast",
            }
        }
    ],
    "news": [
        {
            "metaData": {
                "date": "March 9 2019"
            },
            "content": {
                "header": "New employees",
                "image": imagePath("img3.jpg"),
                "teaser": "We've just hired more staff!",
                "text":
                    "<p>Due to a rapid increase in the amount of incoming orders, we are happy to announce that we have hired several new members of staff.</p>" +
                    "<p>Aliquam sit amet sem ac ligula sodales suscipit vel in nulla. Vivamus sit amet faucibus justo, dictum vehicula urna. Cras dui orci, consectetur non risus nec, tincidunt rhoncus metus. Morbi et tempus elit. Fusce venenatis quam et metus malesuada, porttitor congue metus posuere. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse sit amet venenatis massa. Fusce nec odio porttitor, eleifend erat eget, scelerisque purus. Nulla facilisi. Integer viverra vulputate consectetur. Duis sit amet luctus quam. Mauris bibendum, metus sed lobortis imperdiet, nisi sapien aliquam lacus, ac elementum sapien tortor sit amet diam. Nullam et mi libero.</p>"
            }
        },
        {
            "metaData": {
                "date": "March 10 2019"
            },
            "content": {
                "header": "More color on the walls",
                "image": imagePath("img4.jpg"),
                "teaser": "We've been splashing about the place",
                "text":
                    "<p>White walls are boring, let's spice the place up a bit.</p>" +
                    "<p>Aliquam sit amet sem ac ligula sodales suscipit vel in nulla. Vivamus sit amet faucibus justo, dictum vehicula urna. Cras dui orci, consectetur non risus nec, tincidunt rhoncus metus. Morbi et tempus elit. Fusce venenatis quam et metus malesuada, porttitor congue metus posuere. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse sit amet venenatis massa. Fusce nec odio porttitor, eleifend erat eget, scelerisque purus. Nulla facilisi. Integer viverra vulputate consectetur. Duis sit amet luctus quam. Mauris bibendum, metus sed lobortis imperdiet, nisi sapien aliquam lacus, ac elementum sapien tortor sit amet diam. Nullam et mi libero.</p>"
            }
        },
        {
            "metaData": {
                "date": "March 11 2019",
                "hidden": true
            },
            "content": {
                "header": "New stairs",
                "image": imagePath("img3.jpg"),
                "teaser": "We've just added more stairs!",
                "text":
                    "<p>Due to a rapid increase in the amount of incoming orders, we are happy to announce that we have added several new stairs.</p>" +
                    "<p>Aliquam sit amet sem ac ligula sodales suscipit vel in nulla. Vivamus sit amet faucibus justo, dictum vehicula urna. Cras dui orci, consectetur non risus nec, tincidunt rhoncus metus. Morbi et tempus elit. Fusce venenatis quam et metus malesuada, porttitor congue metus posuere. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse sit amet venenatis massa. Fusce nec odio porttitor, eleifend erat eget, scelerisque purus. Nulla facilisi. Integer viverra vulputate consectetur. Duis sit amet luctus quam. Mauris bibendum, metus sed lobortis imperdiet, nisi sapien aliquam lacus, ac elementum sapien tortor sit amet diam. Nullam et mi libero.</p>"
            }
        },
        {
            "metaData": {
                "date": "March 12 2019"
            },
            "content": {
                "header": "New mugs in the tea kitchen",
                "image": imagePath("img4.jpg"),
                "teaser": "Out with the old mugs!",
                "text":
                    "<p>The old mugs were boring, we've bought some new ones!</p>" +
                    "<p>Aliquam sit amet sem ac ligula sodales suscipit vel in nulla. Vivamus sit amet faucibus justo, dictum vehicula urna. Cras dui orci, consectetur non risus nec, tincidunt rhoncus metus. Morbi et tempus elit. Fusce venenatis quam et metus malesuada, porttitor congue metus posuere. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse sit amet venenatis massa. Fusce nec odio porttitor, eleifend erat eget, scelerisque purus. Nulla facilisi. Integer viverra vulputate consectetur. Duis sit amet luctus quam. Mauris bibendum, metus sed lobortis imperdiet, nisi sapien aliquam lacus, ac elementum sapien tortor sit amet diam. Nullam et mi libero.</p>"
            }
        }
    ]
};
export default data;