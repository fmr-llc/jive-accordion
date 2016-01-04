Jive - Accordion Widget
=======================

The accordion widget is a great tool for organizing content on your overview page.  This is a [Jive](https://community.jivesoftware.com/welcome) HTML widget project that allows content to be divided into sections, and users can expand and collapse sections as desired to view information.  Users can serve themselves to the content on a page without being overwhelmed by everything being displayed at once.  The widget is maintained using a single setup document, which is simply a Jive document with a table representing how the widget will display the information.  After the full accordion widget setup is complete, changes made to the accordion document will automatically be reflected in the accordion.  The accordion utilizes [Bootstrap panels](http://getbootstrap.com/components/#panels) to create a clean user interface for the accordion.


Prerequisite
------------

The [Content Lookup](http://www.github.com/) widget installation has essential parts of setting up this widget project.  Make sure to install this widget prior to the accordion installation.


Upload Libraries
----------------

1. Extract the accordion widget zip archive to your local computer.
2. Log into your Jive community.
3. Navigate to the upload location for your library files.
4. Create an Uploaded File in the Library location of your Jive community.  Drag the file "accordion_widget.css" to the file section of the upload.  Set the file name to "Accordion Widget CSS Library", put a description of your choosing, tag it, set the authors, and make sure it is being published to the correct Library location.  Click Publish.
5. Create another Uploaded File in the Library location of your Jive community.  Drag the file "accordion_widget.js" to the file section of the upload.  Set the file name to "Accordion Widget JavaScript Library", put a description of your choosing, tag it, set the authors, and make sure it is being published to the correct Library location.  Click Publish.
6. Create another Uploaded File in the Library location of your Jive community.  Drag the file "accordion_widget_builder.css" to the file section of the upload.  Set the file name to "Accordion Widget Builder CSS Library", put a description of your choosing, tag it, set the authors, and make sure it is being published to the correct Library location.  Click Publish.
7. Create another Uploaded File in the Library location of your Jive community.  Drag the file "accordion_widget_builder.js" to the file section of the upload.  Set the file name to "Accordion Widget Builder JavaScript Library", put a description of your choosing, tag it, set the authors, and make sure it is being published to the correct Library location.  Click Publish.


Update Library Loader
---------------------

1. Use the Content Lookup widget to search for "Library Loader".  Click the link to the file in the results.  If it is not found, contact your administrator.
2. Download a copy of the "Library Loader" file from your community.  Open it for editing.
3. Go back to the Content Lookup widget and search for "Accordion Widget".  You should see the four library files you uploaded to your community above.
4. Find the search result for "Accordion Widget CSS Library" and copy its Content ID.  It should be a number like 694224.
5. Update the library_loader.js file line for "accordion_widget.css" and update the content ID variable (it should be 0 before updating) to the Content ID from step 4.  The result should look similar to:

```
	libraries['accordion_widget.css'] = { contentID: '694224' };
```

6. Find the search result for "Accordion Widget JavaScript Library" and copy its Content ID.  It should be a number like 694225.
7. Update the library_loader.js file line for "accordion_widget.js" and update the content ID variable (it should be 0 before updating) to the Content ID from step 6.  The result should look similar to:

```
	libraries['accordion_widget.js'] = { contentID: '694225' };
```

8. Find the search result for "Accordion Widget Builder CSS Library" and copy its Content ID.  It should be a number like 694226.
9. Update the library_loader.js file line for "accordion_widget_builder.css" and update the content ID variable (it should be 0 before updating) to the Content ID from step 8.  The result should look similar to:

```
	libraries['accordion_widget_builder.css'] = { contentID: '694226' };
```

10. Find the search result for "Accordion Widget Builder JavaScript Library" and copy its Content ID.  It should be a number like 694227.
11. Update the library_loader.js file line for "accordion_widget_builder.js" and update the content ID variable (it should be 0 before updating) to the Content ID from step 10.  The result should look similar to:

```
	libraries['accordion_widget_builder.js'] = { contentID: '694227' };
```

12. Save the changes to the library_loader.js file on your computer.
13. Edit the "Library Loader" uploaded file in your Jive community.
14. Drag the updated file from your computer to the file section of the uploaded file.  Click Publish.

You have now updated the Library Loader in your Jive community with the library files needed to run the accordion widget.  Next, we need to change the Accordion builder code to use the Library Loader in your community.


Install the Accordion Widget Builder application
---------------------------------------------------

1. Use the Content Lookup widget to search for "Library Loader" again.  Copy the Content ID.
2. Look in the accordion widget archive on your computer and edit the "accordion_widget_builder.html" file.
3. Find the library_loader_content_id and replace the zero in the quotes with the Content ID copied in step 1.  The result should look similar to:

```
	var library_loader_content_id = "694223";
```

4. Save the edit to the "accordion_widget_builder.html" file.
6. Go to the site you want to put the Accordion Builder application in your community, and go to the Overview page.
7. Manage the Overview page, and drag a new HTML widget onto the page.
8. Edit the new HTML Widget.
9. Copy the updated code from "accordion_widget_builder.html" and paste it into the "Your HTML" entry field in the new widget.
10. Click "Save Properties".
11. Click "Publish Layout".


Creating an accordion setup document
------------------------------------

1. Create a document in a place that users will have at least read access.
2. Create a table with two columns.  Make sure you add exactly two columns, and have one row per tab in your accordion.
3. The left column represents the accordion headers (titles) and the right column represents the body (content) in the expanded panel.  For clarity, name the headers (the first row) to “Header” and “Body” to make the column functions clear.  Each row you add to the table represents another accordion section.

NOTE: Quotes and code blocks are stripped down to plain text formatting. Content and headers will be left-aligned. Do not use the “Style” option from the text editor menu, as its Jive specific styling is not supported.

The content section can include pictures, videos, animated GIFs, and other content.  Just avoid using the Jive editor styles, as these are not supported by the accordion code.
4. Once your accordion setup document is completed, publish the document.  Once it is published, copy the URL to use in the builder application.


Build an accordion widget
-------------------------

1. Go to the Accordion Widget Builder application.
2. Paste the URL to the accordion setup document in the entry field.  Click Next.
3. Pick the color you want the accordion tabs.
4. Select how the accordion is first presented.  Press Next.
5. The accordion code will be generated and highlighted in the code box.  Press Ctl-C to copy it to the clipboard.
6. Go to the Overview page you want the accordion.
7. Manage the Overview page.
8. Drag a new HTML Widget into one of the columns on the page.
9. Edit the widget and paste the code from the previous section.
10. Click Save Properties.
11. Publish the page.


Usage
-----

Once the accordion is setup and operational, users can expand and collapse the sections to show/hide the contained information.

If changes are need to the accordion, the setup document can be edited and the changes will be picked up the next accordion refresh.


Issues
------

If your widget is not working as expected, please check out [Issues](docs/issues.md)


Contributing
------------

If you would like to contribute to this project, please check out [Contributing](docs/contributing.md)


License
-------

(c) 2015 Fidelity Investments
Licensed under the Apache License, Version 2.0
