const validator = require('validator');
const { parseDocument } = require('htmlparser2');
const sanitizeHtml = require('sanitize-html');

// Function to validate email
const isValidEmail = (email) => {
  return validator.isEmail(email);
};

// Function to validate HTML content
const isValidHTML = (html) => {
  try {
    parseDocument(html); // Try to parse the HTML
    return true; // If parsing succeeds, the HTML is well-formed
  } catch (error) {
    return false; // If parsing fails, the HTML is not well-formed
  }
};

// Function to sanitize HTML content
const sanitizeContent = (html) => {
  return sanitizeHtml(html, {
    allowedTags: [ 'b', 'i', 'em', 'strong', 'a', 'p', 'div', 'span', 'br', 'ul', 'li', 'ol' ],
    allowedAttributes: {
      a: [ 'href' ],
    },
    allowedSchemes: [ 'http', 'https' ]
  });
};

// Function to validate subject
const isValidSubject = (subject) => {
  const maxLength = 255; // Define the maximum length for the subject
  const isLengthValid = subject.length > 0 && subject.length <= maxLength;
  const isTextValid = !/[<>]/.test(subject); // Avoid certain special characters

  return isLengthValid && isTextValid;
};

module.exports = { isValidEmail, isValidHTML, sanitizeContent, isValidSubject };
