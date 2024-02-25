# SAML Single Sign-On

**Discover the steps to configure SAML Single Sign-On (SSO) for your organization.**

SSO offers a user-friendly approach to log into multiple applications or platforms using a single set of credentials. This document outlines our company's guidlines for SSO integration.

To enable this feature, you must have a teams account and hold the owner role.

Once enabled, All members will be able to log in using your identity provider. Additionally, any new users opting for SAML authentication will seamlessly integrate into your organization, streamlining the onboarding process.

## How It Works

<ol>
    <li>The user can use either of these methods:
        <ol style="list-style-type: upper-alpha">
            <li>Member attempts to login to Wave Connect (Wave) by entering their email address.</li>
            <li>The user attempts to login by clicking on the SSO button and entering the organization username (This can be found and configured under your organization settings on Teams by Wave Connect)<br><br>
            <img src="/org-username.png" alt="Organization Username"></li>
        </ol><br>
    </li>
    <li>Wave sends a request to the identity provider.</li>
    <li>The identity provider checks this member's credentials.</li>
    <li>The identity provider sends a response to Wave to verify the member's identity.</li>
    <li>Wave Accept the response and logs the member into their Wave account.</li>
</ol><br>

**\*Note:** <span style="color: #434343; ">Email aliases do not work with SAML SSO.\*</span>

## Confirming Domains

Organizations can have more than one domain, including subdomains. Organization admins can request to add or remove domains to their organization at any time.
You will need to contact support to make a change to the list of authorized domains.

## SAML - What We Need

To integrate with our system, we will need the following:

1. **The list of authorized domains:** e.g. <u>acme.org</u>, <u>acmecorp.org</u>, or <u>dev.acme.org</u>
2. **The provider's Entity ID**: A URL that identifies the identity provider.
3. **The provider's SSO URL**: The URL of the identity provider's sign-in page.
4. **The service provider Entity ID**: A URL that identifies the service provider.
5. **The provider's public key certificate**: The certificate used to validate tokens signed by the identity provider.

## SAML - What You Will Need

To link our authentication system to your SSO, you will need to add the following call-back URL into your SAML application configuration:

**https://app.wavecnct.com/\_\_/auth/handler**

# Enforcing SAML

# Use the custom login page
