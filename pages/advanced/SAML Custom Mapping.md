<img src="https://github.com/wavecnct/poc-doc/tree/main/public/logo.png" alt="Company Logo" width="200"><br>

# SAML Custom Mapping Guide - Intra ID
##### *Last updated: November 13<sup>th</sup>, 2023* 

## ADD custom claims to your SSO Integration
1. On your Azure application, go to **Single Sign-On** page, then click **Edit** under the **Attributes & Claims** section.
<br><br><img src="https://github.com/wavecnct/poc-doc/tree/main/public/Edit-Attributes&Claims.png" alt="Edit-Attributes&Claims"><br>

2. Click on **Add New Claim**, then add one the following available fields as the name of the claim:<br><br>
    <table>
        <tr>
            <th>Claim Name</th>
            <th>Description</th>
        </tr>
        <tr>
            <td>givenname</td>
            <td>First Name (Required)</td>
        </tr>
        <tr>
            <td>surname</td>
            <td>Last Name (Required)</td>
        </tr>
        <tr>
            <td>emailaddress / email</td>
            <td>Account Email (Required)</td>
        </tr>
        <tr>
            <td>accountphone</td>
            <td>Account Phone Number</td>
        </tr>
        <tr>
            <td>profession</td>
            <td>Profession/Job Title</td>
        </tr>
        <tr>
            <td>location</td>
            <td>City or Location</td>
        </tr>
        <tr>
            <td>mobilephone</td>
            <td>Cellphone Number</td>
        </tr>
        <tr>
            <td>workphone</td>
            <td>Work Phone Number</td>
        </tr>
        <tr>
            <td>workphoneext</td>
            <td>Work Phone Extension</td>
        </tr>
        <tr>
            <td>workemail</td>
            <td>Wrok Email Address</td>
        </tr>
        <tr>
            <td>company</td>
            <td>Company Name</td>
        </tr>
        <tr>
            <td>teamid</td>
            <td>Depreciated: Replaced by Directory Sync / SCIM</td>
        </tr>
    </table>

3. For **Source Attribute**, enter one of the fields available in your Intra ID.
<br><br><img src="https://github.com/wavecnct/poc-doc/tree/main/public/source_attribute.png" alt="Source Attribute"><br>

## Support
If you need further assistance during any stage of the SSO integraion process, pleade no not hesistate to reach out to our support team at <a href="support-dev@wavecnct.com">support-dev@wavecnct.com</a>
