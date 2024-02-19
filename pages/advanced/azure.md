<img src="https://github.com/wavecnct/poc-doc/blob/main/.github/logo.png" alt="Company Logo" width="200">

# SAML Guide - Microsoft Intra ID

## Create a new Application in Azure

1. To create a new application in Azure, go to **Identity > Application > Enterprise Application > New Application**
2. Click on **Create your own application.** Next, enter the name of the application (e.g. Wave Connect) and choose *"Integrate any other application you don't find in the gallery".*

![Create your own application](https://github.com/wavecnct/poc-doc/blob/main/.github/create_app.png#center)

3. Now click on the **Single Sign-On tab** and click **SAML**. The form below should appear.

![SSO Form](https://github.com/wavecnct/poc-doc/blob/main/.github/SSO_form.png)

4. Enter the **Identofier (Entity ID)** (e.g. wave-connect)

![indentifier(entity id)](https://github.com/wavecnct/poc-doc/blob/main/.github/identifier(entity_id).png)

5. Add <span style="background-color: #6F6F6F">https://app.wabecnct.com/__/auth/handler</span> for the Reply URL.
*Note: Currently, only service-provider (SP) initiated SAML is available.

![reply-url](https://github.com/wavecnct/poc-doc/blob/main/.github/reply_url.png)

6. **Recommended**: In the Attributes & Claims section, change the Unique User Identifier to email address.

![attributes & Claims](https://github.com/wavecnct/poc-doc/blob/main/.github/attributes&claims.png)

![manage_claims](https://github.com/wavecnct/poc-doc/blob/main/.github/manage_claims.png)<br>

<span style="background-color: #FF0000; display: block; max-width=100%;"> **Note**: Don't forget to assign users and /or groups to the application.</span>
<div style="page-break-after: always;"></div>

## Configure SAML on Wave for Teams

1. Open <a href="https://teams.wavecnct.com/"> Wave for teams</a> and go to the Organization Settings. Now, open *Configure SAML* form.

![Configure_SAML_Form](https://github.com/wavecnct/poc-doc/blob/main/.github/Configure_SAML_Form.png)<br>

2. Entity ID maps to Azure AD Identifier.

![Entity_ID](https://github.com/wavecnct/poc-doc/blob/main/.github/Entity_ID.png)<br>

3. SSO URL maps to Azure Login URL.

![SSO_URL](https://github.com/wavecnct/poc-doc/blob/main/.github/SSO_URL.png)<br>

4. x509 Certificate maps to Azuer Certificate (Base64).

![x509_Certificate](https://github.com/wavecnct/poc-doc/blob/main/.github/x509_Certificate.png)<br>

5. Service Provider Entity ID maps tp Azure *Identifier (Entity ID)*.

![Service_Provider_Entity_ID](https://github.com/wavecnct/poc-doc/blob/main/.github/SP_Entity_ID.png)<br>


<div style="page-break-after: always;"></div>

## How to Sign in With SSO
How SSO works:

<ol>
    <li>The user can use either of these methods:
        <ol style="list-style-type: upper-alpha">    
            <li>Member attempt tp log in to Wave Connect (Wave) by entering his/her email address</li>
            <li>The user attempts to login by clicking on the SSO button and entering the organization username (This can be found in your organization settings).
            
![Organization_Username](https://github.com/wavecnct/poc-doc/blob/main/.github/Org_Username.png)<br>
            </li>
            </ol>
    </li>
    <li>Wave sends a request to the identity provider.</li>
    <li>The identity provider checks this member's credentials.</li>
    <li>The identity provider sends a response to Wave to verify the member's identity.</li>
    <li>Wave accepts the response and logs the member into their Wave account.</li>
</ol>

***Note**: Email aliases do not work with SAML SSO.*

## Support
If you need further assistance during any stage of the SSO integraion process, pleade no not hesistate to reach out to our support team at <a href="support-dev@wavecnct.com">support-dev@wavecnct.com</a>




