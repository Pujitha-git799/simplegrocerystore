const { it } = require("mocha")

describe('xpathlocaters',()=>{

it('find num of products',()=>{
    cy.visit("https://www.amazon.com/s?k=shirts&crid=2X4LIJHY50460&sprefix=shirts%2Caps%2C615&ref=nb_sb_noss_1")
    cy.xpath()
})
})