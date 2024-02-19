<img src="https://github.com/wavecnct/poc-doc/blob/main/.github/logo.png" alt="Company Logo" width="200"><br>

# SAML Custom Mapping Guide - Intra ID
##### *Last updated: November 13<sup>th</sup>, 2023* 

## ADD custom claims to your SSO Integration
1. On your Azure application, go to **Single Sign-On** page, then click **Edit** under the **Attributes & Claims** section.
<br><br><img src="https://github.com/wavecnct/poc-doc/blob/main/.github/Edit-Attributes&Claims.png" alt="Edit-Attributes&Claims"><br>

2. Click on **Add New Claim**, then add one the following available fields as the name of the claim:

<table>
    <tr>
        <th>Claim Name</th>
        <th>Description</th>
    </tr>
    <tr>
        <td align="center">givenname</td>
        <td align="center">First Name (Required)</td>
    </tr>
    <tr>
        <td align="center">surname</td>
        <td align="center">Last Name (Required)</td>
    </tr>
    <tr>
        <td align="center">emailaddress / email</td>
        <td align="center">Account Email (Required)</td>
    </tr>
    <tr>
        <td align="center">accountphone</td>
        <td align="center">Account Phone Number</td>
    </tr>
    <tr>
        <td align="center">profession</td>
        <td align="center">Profession/Job Title</td>
    </tr>
    <tr>
        <td align="center">location</td>
        <td align="center">City or Location</td>
    </tr>
    <tr>
        <td align="center">mobilephone</td>
        <td align="center">Cellphone Number</td>
    </tr>
    <tr>
        <td align="center">workphone</td>
        <td align="center">Work Phone Number</td>
    </tr>
    <tr>
        <td align="center">workphoneext</td>
        <td align="center"Work Phone Extension</td>
    </tr>
    <tr>
        <td align="center">workemail</td>
        <td align="center">Wrok Email Address</td>
    </tr>
    <tr>
        <td align="center">company</td>
        <td align="center">Company Name</td>
    </tr>
    <tr>
        <td align="center">teamid</td>
        <td align="center">Depreciated: Replaced by Directory Sync / SCIM</td>
    </tr>
</table>

3. For **Source Attribute**, enter one of the fields available in your Intra ID.

<img src="https://github.com/wavecnct/poc-doc/blob/main/.github/source_attribute.png" alt="Source Attribute"><br>

## Support
If you need further assistance during any stage of the SSO integraion process, pleade no not hesistate to reach out to our support team at <a href="support-dev@wavecnct.com">support-dev@wavecnct.com</a>




