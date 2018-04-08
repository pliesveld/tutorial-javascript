var _ = require('lodash');

var ownerArr, pets1, pets2;

ownerArr = [{
    "owner": "Colin",
    "pets": [{"name":"dog1"}, {"name": "dog2"}]
}, {
    "owner": "John",
    "pets": [{"name":"dog3"}, {"name": "dog4"}]
}];

pets1 = ownerArr.map(function(owner) {
    return owner.pets[0].name;
})

pets2 = _.map(ownerArr, 'pets[0].name');
