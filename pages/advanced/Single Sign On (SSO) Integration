<img src="https://github.com/wavecnct/poc-doc/blob/main/.github/logo.png" alt="Company Logo" width="200"><br>

# Single Sign-ON (SSO) Integration Documentation

## Introduction

SSO offers a user-friendly approach to log into multiple applications or platforms using a single set of credentials. This document outlines our company;s guidlines for SSO integration.

## WHY SSO?

SSO helps reduce password fatigue from different username and password combinations, reduces time spent re-entering passwords for the same identity, and reduces IT costs due to lower number of IT help desk calls about passwords.

## SSO Standards Supported

Our SSO integration supports **SAML** and **OpenID Connect (OIDC)**

## How It Works

<ol>
    <li>The user can use either of these methods:
        <ol style="list-style-type: upper-alpha">
            <li>Member attempts to login to Wave Connect (Wave) by entering their email address.</li>
            <li>The user attempts to login by clicking on the SSO buttin and entering the organization username (This can be found and configured under your organization settings on Teams by Wave Connect)

![Organization_Username](https://github.com/wavecnct/poc-doc/blob/main/.github/Org_Username.png)<br>    </li>
            </ol>
    </li>
    <li>Wave sends a request to the identity provider.</li>
    <li>The identity provider check this member's credentials.</li>
    <li>The identity provider sends a respnse to Wave to verify the member's identity.</li>
    <li>Wave Accepts the response and logs the member into their Wave account.</li>
</ol><br>
***Note:** Email aliases do not work with SAML SSO.*<br>

## Confirming Domains

Organizations can have more than one domain, including subdomains. Organization admins can request to add or remove domains to their organization at any time. 
You’ll need to contact support to make a change to the list of authorized domains.  

## SAML - What We Need

To integrate with our system, we will need the following:

<ol>
    <li>**The list of authorized domains:** e.g. _acme.org_, _acmecorp.org_, or _dev.acme.org_</li>
    <li>**The provider's Entity ID**: A URL that identifies the identity provider.</li>
    <li>**The provider's SSO URL**: The URL of the identity provider's sign-in page.</li>
    <li>**The service provider Entity ID**: A URL that identifies the service provider.</li>
    <li>**The provider's public key certificate**: The certificate used to validate tokens signed by the identity provider.</li>
</ol>

## SAML - What You Will Need

To link our authentication system to your SSO, you will need to add the following call-back URL into your SAML application configuration:

    - <a href="https://app.wavecnct.com/__/auth/handler">https://app.wavecnct.com/__/auth/handler</a>

## Support
If you need further assistance during any stage of the SSO integraion process, pleade no not hesistate to reach out to our support team at <a href="support-dev@wavecnct.com">support-dev@wavecnct.com</a>




