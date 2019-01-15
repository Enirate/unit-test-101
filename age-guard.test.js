const ageGuard = require('./age-guard');

it('There should be function named ageGuard', () => {

expect(ageGuard).toBeDefined();

});

it('Persons under 18 should not be granted access', () => {

expect(ageGuard(14)).toBe('You are not old enough to access this site');

});

it('Persons 18 and above should be granted access', () => {

expect(ageGuard(18)).toBe('You\'ve been granted access to this site');

});