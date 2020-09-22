context('Weather', () => {
	it('[App] Visits the app link', () => {
		cy.visit('http://localhost:3000/');
	});

	it('[Input] by default "düsseldorf" should be present in input field', () => {
		cy.get('.wf-input input').should('have.value', 'düsseldorf');
	});

	it('[Input] change city name to "islamabad"', () => {
		cy.get('.wf-input input').clear();
		cy.get('.wf-input input').type('islamabad');
		cy.get('.wf-input input').should('have.value', 'islamabad');
	});

	it('[Result] validate result text', () => {
		cy.wait(1000);
		cy.get('.wf-card h1').should('exist');
		cy.get('.wf-card h2').should('exist');
		cy.get('.wf-card h6').should('exist');
		cy.get('.wf-card p').should('exist');
	});

	it('[Result] validate <img /> src', () => {
		cy.get('.wf-card img')
			.should('have.attr', 'src')
			.should('include', 'data:image');
	});
});
