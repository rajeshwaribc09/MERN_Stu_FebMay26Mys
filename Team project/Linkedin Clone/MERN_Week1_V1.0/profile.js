const { getCurrentUser } = require("./user");
const eventEmitter = require("./events");

// Add Skill
function addSkill(skill) {
  const user = getCurrentUser();
  user.skills.push(skill);
  eventEmitter.emit("profileUpdated");
}

// Add Education
function addEducation(edu) {
  const user = getCurrentUser();
  user.education.push(edu);
  eventEmitter.emit("profileUpdated");
}

// Add Experience
function addExperience(exp) {
  const user = getCurrentUser();
  user.experience.push(exp);
  eventEmitter.emit("profileUpdated");
}

// View Profile
function viewProfile() {
  const user = getCurrentUser();

  return {
    Name: user.name,
    Headline: user.headline,
    Skills: user.skills,
    Education: user.education,
    Experience: user.experience,
    Connections: user.connections.length
  };
}

module.exports = {
  addSkill,
  addEducation,
  addExperience,
  viewProfile
};