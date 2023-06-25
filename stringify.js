let myLeads = `["www.awsome.com"]`
myLeads = JSON.parse(myLeads)
myLeads.push("sdsd")
myLeads = JSON.stringify(myLeads)
console.log(typeof myLeads)
console.log(myLeads)