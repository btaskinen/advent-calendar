/// <reference types="cypress" />
import videoData from '../../src/videoData.json';

describe('Advent Calendar App', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173');
  });

  it('Page has correct content', () => {
    cy.get('[data-cy="app-title"]').contains('Advent Calendar 2023');
    cy.get('[data-cy="door-container"]')
      .find('[data-cy="door"]')
      .each(($door, index) => {
        cy.wrap($door).should('have.text', videoData[index].doorNumber);
      });
    cy.get('[data-cy="app-footer"]').contains('Created by Barbara Taskinen');
  });

  it('Door text changes correctly when door clicked too early', () => {
    cy.clock(Date.UTC(2023, 11, 15));
    cy.get('[data-cy="door-container"]')
      .find('[data-cy="door"]')
      .each(($door, index) => {
        if (Number(videoData[index].doorNumber) > 15) {
          cy.wrap($door).click().should('have.text', 'Not yet. Be patient!');
        }
      });
  });

  it('Modal opens and closes when correct date', () => {
    cy.clock(Date.UTC(2023, 11, 9));
    cy.get('[data-cy="door-container"]')
      .find('[data-cy="door"]')
      .each(($door, index) => {
        if (Number(videoData[index].doorNumber) <= 9) {
          cy.wrap($door).click();
          cy.get('[data-cy="modal-title"]').should(
            'have.text',
            `${videoData[index].artist} - ${videoData[index].songTitle}`
          );
          cy.get('[data-cy="iframe"]').should(
            'have.attr',
            'src',
            `https://www.youtube.com/embed/${videoData[index].videoID}`
          );
          cy.get('[data-cy="modal-info-text"]').should(
            'have.text',
            'If video is unavailable, watch it from YouTube'
          );
          cy.get('[data-cy="youtube-link"]').should(
            'have.attr',
            'href',
            `https://youtu.be/${videoData[index].videoID}`
          );
          cy.get('[data-cy="close-button"]').click();
          cy.wrap($door).should('have.text', videoData[index].artist);
        }
      });
  });
});
