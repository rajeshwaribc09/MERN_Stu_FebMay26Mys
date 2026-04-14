const readline = require("readline");
const chalk = require("chalk");

const {
  createProfile,
  loginUser,
  getCurrentUser,
  users
} = require("./user");

const {
  addSkill,
  addEducation,
  addExperience,
  viewProfile
} = require("./profile");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// CHECK LOGIN
function requireLogin() {
  if (!getCurrentUser()) {
    console.log(chalk.red("Please login first!"));
    return false;
  }
  return true;
}

// MENU
function menu() {
  console.log(chalk.yellow("\n--- MENU ---"));
  console.log("1. Create Profile / Login");
  console.log("2. View My Profile");
  console.log("3. Edit Profile (Skills, Experience, Education)");
  console.log("4. View Other Profiles");
  console.log("5. Send Connection Request");
  console.log("6. View Connection Requests");
  console.log("7. Accept/Reject Requests");
  console.log("8. View Connections");
  console.log("9. Create Post");
  console.log("10. View Feed");
  console.log("11. Like / Comment on Posts");
  console.log("12. Exit");

  rl.question("Choice: ", handleMenu);
}
function handleMenu(choice) {

  switch (choice) {
    case "1":
      console.log("\n1. Create Profile");
      console.log("2. Login");

      rl.question("Choose: ", opt => {
        if (opt === "1") {
          rl.question("Enter Name: ", name => {

            rl.question("Enter Headline: ", headline => {

              createProfile(name, headline)
                .then(() => {
                  console.log(chalk.green("Profile created successfully"));
                  menu();
                })
                .catch(err => {
                  console.log(chalk.red(err));
                  menu();
                });

            });

          });
        }
        else if (opt === "2") {
          rl.question("Enter Name: ", name => {

            loginUser(name)
              .then(() => {
                console.log(chalk.green("Logged in successfully"));
                menu();
              })
              .catch(err => {
                console.log(chalk.red(err));
                menu();
              });

          });
        }

        else {
          console.log(chalk.red("Invalid option"));
          menu();
        }

      });
      break;
    case "2":
      if (!requireLogin()) return menu();

      const profile = viewProfile();
      console.log(chalk.green("\n--- MY PROFILE ---"));
      console.log(profile);
      menu();
      break;

    case "3":
      if (!requireLogin()) return menu();

      console.log("\n1. Add Skill");
      console.log("2. Add Education");
      console.log("3. Add Experience");

      rl.question("Choose: ", opt => {

        if (opt === "1") {
          rl.question("Enter Skill: ", skill => {
            addSkill(skill);
            menu();
          });
        }

        else if (opt === "2") {
          rl.question("Enter Education: ", edu => {
            addEducation(edu);
            menu();
          });
        }

        else if (opt === "3") {
          rl.question("Enter Experience: ", exp => {
            addExperience(exp);
            menu();
          });
        }

        else {
          console.log(chalk.red("Invalid"));
          menu();
        }

      });
      break;
    case "4":
      if (!requireLogin()) return menu();

      console.log(chalk.cyan("\n--- OTHER PROFILES ---"));

      const currentUser = getCurrentUser();
      const otherUsers = users.filter(u => u.id !== currentUser.id);

      if (otherUsers.length === 0) {
        console.log(chalk.yellow("No other users found"));
      } else {
        otherUsers.forEach(u => {
          console.log(`ID: ${u.id}, Name: ${u.name}, Headline: ${u.headline}`);
        });
      }
      menu();
      break;
    case "5":
    case "6":
    case "7":
    case "8":
    case "9":
    case "10":
    case "11":
      break;

    case "12":
      console.log(chalk.green("Goodbye!"));
      rl.close();
      break;

    default:
      console.log(chalk.red("Invalid choice"));
      menu();
  }
}

menu();