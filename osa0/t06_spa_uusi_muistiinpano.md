``` mermaid
sequenceDiagram
        participant browser
        participant server

        browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
        activate server
        server-->>browser: JSON file (status 201 Created, response message: "note created")
        deactivate server
        Note right of browser: The data is posted to the server in JSON format. The data is saved to the server and the ul list is re-rendered to show the new note on the page.

```