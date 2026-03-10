// Permission rules array
let rules = [
    { role: "admin", action: "READ", allowed: true },
    { role: "admin", action: "WRITE", allowed: true },
    { role: "student", action: "READ", allowed: true },
    { role: "student", action: "WRITE", allowed: false },
    { role: "guest", action: "READ", allowed: false }
  ];
  
  
  // 1️ Filter rules where allowed === true
  let allowedRules = rules.filter(rule => rule.allowed === true);
  
  
  // 2️ Create simplified allowedPairs using map
  let allowedPairs = allowedRules.map(rule => {
    return rule.role + ":" + rule.action;
  });
  
  
  // 3️ Create summary object using reduce
  let summary = allowedRules.reduce((res, rule) => {
  
    if (!res[rule.role]) {
      res[rule.role] = 0;
    }
  
    res[rule.role]++;
  
    return res;
  
  }, {});
  
  
  // 4 Print results
  console.log("Allowed Rules:", allowedRules);
  console.log("Allowed Pairs:", allowedPairs);
  console.log("Summary:", summary);