# Zapier

## Introduction
<p>
Zapier is an excellent automation tool that removes the hassle of performing repetitive tasks. It combines user interfaces, data tables, and logic with 6,000+ apps to build and automate simple tasks or build an entire automated system. In this document, we provide a step-by-step guide on how users can deploy the Wave Connect app on Zapier to sync information and lead to other Zapier apps.
</p>

## Setting Up Your First Zap
1. Login to your Wave user account at: <a href="https://app.wavecnct.com/login"> Sign into Wave</a>
2. Under Settings, click on CRM Integrations.
3. Click on '**Connect**' button in front of Zapier.

![Connect Zapier CRM](/connect-zapier.png)

4. Copy your API key to your clipboard by clicking on the copy icon (we will use this key in later steps to create a link between Zapier and Wave), and click on '**Continue**'. A new tab, directing you to the zapier website, should open.

<img src="/copy-api-key.png" alt="Copy API Key" width="400px">

5. On the new page, click on the orange, ‘**Connect Wave Connect to 6,000+ apps**’ button. You will be directed to a Zap creation page with a preliminary outline of your Zap.

![Connect Wave to Zapier Apps](/orange-connect-button.png)

6. Each Zap is made of two separate events:
    A. Trigger: an event that starts the automation process (e.g. new contact creation inside the Wave app).
    B. Action: the automated process performed once the trigger occurs inside the wave app (i.e. when trigger happens, action follows).

![Outline Of A Zap](/zap-outline.png)

## Setting Up Trigger

1. Click on the trigger banner.
2. Under **App & event**, you can select the event that triggers the automation process, including new contact creation, deletion, and information updates. In this guide, we focus solely on new contact creation. Selecting '**New Contact**' ensures any new contact created in your Wave app initiates this Zapier process. To do so, map **/* Event (required)** to ‘**New Contact**’ and then **Continue**.

![New Contact Event](/event-new-contact.png)

3. Authenticate your Wave user account on Zapier by clicking on the sign-in button.

![Sign Into Wave](/sign-into-wave.png)

4.  Enter your API key from *step 4* of '*setting up your first Zap*'. Click on ‘**Yes, Connect to Wave Connect**.’Afterwards, verify your Wave user account credentials, displayed in the designated area, and press **Continue**.

![Enter API Key](/enter-api-key.png)

5. Click ‘**Test trigger**’ if you wish to test your trigger with a contact already in your Wave contact’s list. Select a contact that you wish to perform your test with and click on ‘**Continue with selected record**.’

