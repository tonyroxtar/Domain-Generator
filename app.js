let pronoun = ["the", "our", "them"];
let adj = ["great", "big", "tiny"];
let noun = ["jogger", "racoon", "mutt"];
let domain = [".net", ".com", ".io", ".cl"];

for (let i = 0; i < pronoun.length; i++)
    for (let j = 0; j < adj.length; j++)
        for (let k = 0; k < noun.length; k++)
            for (let l = 0; l < domain.length; l++) {

                console.log(pronoun[i], adj[j], noun[k], domain[l]);

            }