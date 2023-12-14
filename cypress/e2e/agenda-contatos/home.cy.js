/// <reference types="cypress" />

describe('Testes para a home', () => {

    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it('Deve preencher formulário para criar lista', () => {
        cy.get('[type="text"]').type('Bruno Dias')
        cy.get('[type="email"]').type('brunodias@teste.com')
        cy.get('[type="tel"]').type('21 999999999')

        cy.get('.adicionar').click()
    })

    it('Inclusão-Deve adicionar svg, lista com 3 itens, botão deletar e botão editar', () => {
        cy.get('.adicionar').click()
        cy.get('svg').should('have.length',1)
        cy.get(':nth-child(2) > .sc-dmqHEX > .sc-eDDNvR li').should('have.length', 3)

        cy.get(':nth-child(2) > .sc-gueYoa > .delete').should('have.length',1)
        cy.get(':nth-child(2) > .sc-gueYoa > .edit').should('have.length',1)        
    })

    it('Alteração-Deve exibir um botão salvar e um botão cancelar', () => {
        cy.get(':nth-child(2) > .sc-gueYoa > .edit').click()
        
        cy.get('.alterar').should('have.length',1)
        cy.get('.cancelar').should('have.length',1)
    })

    it('Remoção-Remove item ao clicar no botão deletar', () => {
        cy.get('.delete').first().click()
    })

})