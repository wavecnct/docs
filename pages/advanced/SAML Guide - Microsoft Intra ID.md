<img src="https://github.com/wavecnct/poc-doc/blob/main/public/logo.png" alt="Company Logo" width="200"><br>

# SAML Guide - Microsoft Intra ID
##### *Last updated: Sept 21<sup>st</sup>, 2023* 

## Create a new Application in Azure

1. To create a new application in Azure, go to **Identity > Application > Enterprise Application > New Application**
2. Click on **Create your own application.** Next, enter the name of the application (e.g. Wave Connect) and choose *"Integrate any other application you don't find in the gallery".*
<br><br>![Create your own application](https://github.com/wavecnct/poc-doc/blob/main/public/create_app.png)

3. Now click on the **Single Sign-On tab** and click **SAML**. The form below should appear.
<br><br>![SSO Form](https://github.com/wavecnct/poc-doc/blob/main/public/SSO_form.png)

4. Enter the **Identofier (Entity ID)** (e.g. wave-connect)
<br><br>![indentifier(entity id)](https://github.com/wavecnct/poc-doc/blob/main/public/identifier(entity_id).png)

5. Add <span style="background-color: #6F6F6F">https://app.wabecnct.com/__/auth/handler</span> for the Reply URL.
*Note: Currently, only service-provider (SP) initiated SAML is available.
<br><br>![reply-url](https://github.com/wavecnct/poc-doc/blob/main/public/reply_url.png)

6. **Recommended**: In the Attributes & Claims section, change the Unique User Identifier to email address.
<br><br>![attributes & Claims](https://github.com/wavecnct/poc-doc/blob/main/public/attributes&claims.png)
<br><br>![manage_claims](https://github.com/wavecnct/poc-doc/blob/main/public/manage_claims.png)<br>

<span style="background-color: #FFE598; display: block; max-width=100%;"> **Note**: Don't forget to assign users and /or groups to the application.</span>

<div style="page-break-after: always;"></div>

## Configure SAML on Wave for Teams

1. Open <a href="https://teams.wavecnct.com/"> Wave for teams</a> and go to the Organization Settings. Now, open *Configure SAML* form.
<br><br>![Configure_SAML_Form](https://github.com/wavecnct/poc-doc/blob/main/public/Configure_SAML_Form.png)<br>

2. Entity ID maps to Azure AD Identifier.
<br><br>![Entity_ID](https://github.com/wavecnct/poc-doc/blob/main/public/Entity_ID.png)<br>

3. SSO URL maps to Azure Login URL.
<br><br>![SSO_URL](https://github.com/wavecnct/poc-doc/blob/main/public/SSO_URL.png)<br>

4. x509 Certificate maps to Azuer Certificate (Base64).
<br><br>![x509_Certificate](https://github.com/wavecnct/poc-doc/blob/main/public/x509_Certificate.png)<br>

5. Service Provider Entity ID maps tp Azure *Identifier (Entity ID)*.
<br><br>![Service_Provider_Entity_ID](https://github.com/wavecnct/poc-doc/blob/main/public/SP_Entity_ID.png)<br>


<div style="page-break-after: always;"></div>

## How to Sign in With SSO
How SSO works:

<ol>
    <li>The user can use either of these methods:
        <ol list-style-type: "upper-alpha">    
            <li>Member attempt tp log in to Wave Connect (Wave) by entering his/her email address</li>
            <li>The user attempts to login by clicking on the SSO button and entering the organization username (This can be found and configured under your organization settings on Teams by Wave Connect).<br><br>
            <img src="https://github.com/wavecnct/poc-doc/blob/main/public/Org_Username.png" alt="Organization_Username"></li>
        </ol><br>
    </li>
    <li>Wave sends a request to the identity provider.</li>
    <li>The identity provider checks this member's credentials.</li>
    <li>The identity provider sends a response to Wave to verify the member's identity.</li>
    <li>Wave accepts the response and logs the member into their Wave account.</li>
</ol>

***Note**: Email aliases do not work with SAML SSO.*

## Support
If you need further assistance during any stage of the SSO integraion process, pleade no not hesistate to reach out to our support team at <a href="support-dev@wavecnct.com">support-dev@wavecnct.com</a>




