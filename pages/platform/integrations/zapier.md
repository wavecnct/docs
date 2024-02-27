# Zapier

## Introduction
<p>
Zapier is an excellent automation tool that removes the hassle of performing repetitive tasks. It combines user interfaces, data tables, and logic with 6,000+ apps to build and automate simple tasks or build an entire automated system. In this document, we provide a step-by-step guide on how users can deploy the Wave Connect app on Zapier to sync information and lead to other Zapier apps.
</p>

## Setting Up Your First Zap
1. Login to your Wave user account at: <a href="https://app.wavecnct.com/login"> Sign into Wave</a>
2. Under Settings, click on CRM Integrations.
3. Click on '**Connect**' in front of Zapier.<br><br>

<img src="/connect-zapier.png" alt="Connect Zapier CRM" width="500px"><br>

4. Copy your API key to your clipboard by clicking on the copy icon (we will use this key in later steps to create a link between Zapier and Wave), and click on '**Continue**'. A new tab, directing you to the zapier website, should open.<br><br>

<img src="/copy-api-key.png" alt="Copy API Key" width="400px"><br>

5. On the new page, click on the orange, ‘**Connect Wave Connect to 6,000+ apps**’ button.<br><br>

<img src="/orange-connect-button.png" alt="Connect Wave to Zapier Apps" width="500px"><br>

6. You will be directed to a Zap creation page with a preliminary outline of your Zap. Each Zap is made of two separate events:

    A. Trigger: an event that starts the automation process (e.g. new contact creation inside the Wave app).

    B. Action: the automated process performed once the trigger occurs inside the wave app (i.e. when trigger happens, action follows).
<br><br>
<img src="/zap-layout.png" alt="Outline Of A Zap" width="500px"><br>

## Setting Up Trigger

1. Click on the trigger banner.
2. Under '**App & event**', you can select the event that triggers the automation process, including new contact creation, deletion, and information updates. In this guide, we focus solely on new contact creation. Selecting '**New Contact**' ensures any new contact created in your Wave app initiates this Zapier process. To do so, map '**\* Event (required)**' to ‘**New Contact**’ and then '**Continue**'.<br><br>

<img src="/event-new-contact.png" alt="New Contact Event" width="500px"><br>

3. Authenticate your Wave user account on Zapier by clicking on the sign-in button.<br><br>

<img src="/sign-into-wave.png" alt="Sign Into Wave" width="500px"><br>

4.  Enter your API key from *step 4* of <a href="#setting-up-your-first-zap">*Setting Up Your First Zap*</a>. Click on ‘**Yes, Connect to Wave Connect**.’ Afterwards, verify your Wave user account credentials, displayed in the designated area, and press '**Continue**'.<br><br>

<img src="/enter-api-key.png" alt="Enter API Key" width="500px"><br>

5. Click ‘**Test trigger**’ if you wish to test your trigger with a contact already in your Wave contact’s list. Select a contact that you wish to perform your test with and click on ‘**Continue with selected record**.’<br><br>

<img src="/test-connection.png" alt="Test Trigger Connection" width="300px"><br>

This concludes the setting up process for the trigger event and leads us to the action event.

## Setting Up Action

1. Find the action banner below the trigger banner. After clicking on the banner, you will choose among various apps, each offering various tasks and services. For this demo, select '**Google Sheets**' app to track newly created contacts.<br><br>

<img src="/select-google-sheets.png" alt="Choose Google Sheets" width="500px"><br>

\***Note**: If the action banner does not exist in your Zap outline, you can add it by clicking on the plus icon below the trigger banner.\*<br><br>

<img src="/add-action-banner.png" alt="Add Action Banner" width="500px"><br>

\***Note**: If you cannot find Google Sheets, you can search for it in the search bar at the top of the page.\*<br><br>

<img src="/search-google-sheets.png" alt="Seach For Google Sheets" width="500px"><br>

2. Map ‘**\* Event**’ to ‘**Create Spreadsheet Row**’ and press '**Continue**.'<br><br>

<img src="/create-spreadsheet-row.png" alt="Create Spreadsheet Row" width="500px"><br>

3. Sign-in and authenticate your Google account then '**Continue**'.
4. Under the Action tab:<br>
    A. Select ‘**My Google Drive**’ for your Drive.<br><br>

    <img src="/select-drive.png" alt="Choose Drive" width="500px"><br>

    B. Select the spreadsheet that you want to add your contact information to.<br><br>

    <img src="/select-spreadsheet.png" alt="Choose Your Spreadsheet" width="500px"><br>

    <span style="background-color: #D2D8F3; display: block; max-width: 100%; padding: 20px; text-align: center; "> **Note**: the sheet you select for this step should already exist in your Google Sheets account (visit <a href="https://support.google.com/docs/answer/6000292?hl=en&co=GENIE.Platform%3DDesktop#:~:text=Open%20the%20Sheets%20home%20screen,and%20open%20your%20new%20spreadsheet"> How to Create a Spreadsheet </a> to learn how to create a new spreadsheet on Google Sheets).</span>

    C. Select a sheet from your spreadsheet that you want your information transcribed to.<br><br>

    <img src="/select-sheet.png" alt="Choose Desired Sheet" width="300px"><br>

    <span style="background-color: #D2D8F3; display: block; max-width: 100%; padding: 20px; text-align: center; "> **Note**: Zapier uses the content in the first row of your spreadsheet to map contact information from Wave to the columns on your spreadsheet. We recommend choosing appropriate titles in the first row of your spreadsheet (e.g. first name, last name, etc.) </span>

    D. If your sheet is empty, you will receive an error message from Zapier. To circumvent, add headers to the first row of your document and press ‘Refresh Fields’ to load headers from your document. This should display corresponding fields from each cell in the first row of your spreadsheet.<br><br>

    <img src="/no-header-error.png" alt="Error Associated With Having No Headers in Your Google Sheets Document" width="300px"><br>

5. Map '*name*' to '*first name*,' '*surname*' to '*last name*,' '*phone number*' to '*phone*,' '*email*' to '*email*,' and '*location*' to '*city*,' respectively. Once each header is matched with its corresponding info from Wave, click on '**Continue**'. You will then have the option to test your Zap or skip it this step altogther.<br><br>

<img src="/contact-info-mapping.png" alt="Mapping Contact Information" width="300px"><br>

\***Note**: If you choose to test your Zap, Zapier will append Wave contact information directly to your spreadsheet. You can review the output in your Google Sheets spreadsheet. If unsatisfied, you can make changes or add additional steps as needed.\*


6. After confirming your result, click on '**Publish**' to finalize your Zap. Once you publish your Zap, Zapier will append contact information for all contacts on your Wave's contact list to your spreadsheet.


<span style="background-color: #D2D8F3; display: block; max-width: 100%; padding: 20px; text-align: center; "> **Note**: to avoid duplicates in your spreadsheet, delete test entries before publishing your Zap. </span>

7. Congratulations 🎉, you just finished configuring and publishing your first Zap! You may now add multiple Zaps with different triggers for contact deletion or information updates as needed by your requirements.


## Support
If you need assistance during any stage of the SSO integration process, please don't hesitate to reach out to our support team at <a href="support-dev@wavecnct.com">support-dev@wavecnct.com</a>.