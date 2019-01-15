const ageGuard = age => age >= 18 ? 'You\'ve been granted access to this site' :  'You are not old enough to access this site';

module.exports = ageGuard;