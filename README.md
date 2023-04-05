# [cv generator](https://seanstephenbrian.github.io/cv-project/)

**cv generator** is single-page react app for building a custom resume with a user-selected font and 
accent color.

general personal information, education history, and job information are stored in arrays of objects 
within the state of the parent `App` component. all information is editable -- when the user chooses
to edit a particular section, a new editing view with populated input fields is displayed, and the 
entries within the section are dynamically updated whenever the user changes the value of any of the 
inputs.

new entries can be added, entries can be deleted, and the user has the ability to choose a custom font 
and set a custom accent color for the section headings.

a print button launches the print dialog with a printer-ready version of the custom resume.