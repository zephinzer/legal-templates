import React, { Component } from 'react';
import Link from 'next/link';
import moment from 'moment';
import PageLayout from '../components/PageLayout';
import Section from '../components/Section';
import Header from '../components/Header';

export default class TermsOfService extends Component {
  constructor(props) {
    super(props);
    this.state = {
      companyAlias: '%_COMPANY_ALIAS_%',
      companyOrigin: {
        adjective: '%_COMPANY_ORIGINATION_%',
        noun: '%_COMPANY_ORIGIN_%',
      },
      companyName: '%_COMPANY_NAME_%',
      domainNames: ['example.com'],
      email: {
        report: 'report-something@example.com'
      },
      link: {
        privacyPolicy: 'http://about:blank',
        thisDocument: (typeof window !== 'undefined') ? window.location.href : '//about:blank'
      },
    };
  }

  render() {
    const date = moment(new Date()).format('Do MMMM YYYY');
    const {companyAlias, companyOrigin, companyName, domainNames, email, link} = this.state;
    const lastModified = `Last modified: ${date}`;
    const privacyPolicy = <a href={link.privacyPolicy} target="_blank">Privacy Policy</a>;
    const thisDocument = <a href={link.thisDocument} target="_blank"> {link.thisDocument}</a>;
    return (
      <PageLayout>
        <Header subHeader={lastModified}>
          Terms of Service
        </Header>
        <Section title="General">
          <p>
            These Terms of Service ("Agreement") governs the use of the services
            ("Service") that are made available by {companyName} ("{companyAlias}", "we" or "us").
            These Terms and Conditions represent the whole agreement and understanding
            between {companyAlias} and the individual or entity ("Subscriber" or "you")
            who subscribes to our service(s) found at: {
              domainNames.map((domainName, index) => {
                const postfix = ((index + 2 === domainNames.length) ? ' and ' : ((index + 1 === domainNames.length) ? '' : ', '));
                return <span key={`domain-name-${index}`}>
                  <a href={domainName} target="_blank">{domainName}</a>{postfix}
                </span>
              })
            } (each a "Site", collectively "Sites").
          </p>
          <p>
            PLEASE READ THIS AGREEMENT CAREFULLY.
          </p>
          <p>
            By your use of the Service, you agree to comply with all of the terms and conditions set
            out in this Agreement. {companyAlias} may terminate your account at any time, with
            or without notice, for conduct that is in breach of this Agreement, for conduct
            that {companyAlias} believes is harmful to its business, or for conduct where the
            use of the Service is harmful to any other party.
          </p>
          <p>
            {companyAlias} may, in its sole discretion, change or modify this Agreement at any
            time, with or without notice. Such changes or modifications shall be made effective
            for all Subscribers upon posting of the modified Agreement to this web address (URL):
            {thisDocument}. You are responsible to read this document from time to time to ensure
            that your use of the Service remains in compliance with this Agreement.
          </p>
        </Section>
        <Section title="Privacy">
          <p>
            Your privacy is very important to us. We designed our {privacyPolicy} to
            make important disclosures about how you can use {companyAlias} to share with others
            and how we collect and can use your Content and information. We encourage you to
            read the {privacyPolicy}, and to use it to help you make informed decisions. 
          </p>
          <p>
            Additionally, by using the Site, you acknowledge and agree that Internet transmissions
            are never completely private or secure. You understand that any message or information
            you send to the Site may be read or intercepted by others, even if there is a special
            notice that a particular transmission (for example, credit card information) is encrypted.
          </p>
        </Section>
        <Section title="Availability">
          <p>
            Our Sites are provided on an "as is" basis. At times, Sites may not be available
            or may be affected by faults or maintenance work, or by circumstances outside our
            control. No warranty is given about the quality, functionality, availability or
            performance of our Sites or any Content on the Sites. We reserve the right to change,
            suspend or withdraw Content from our Sites, to suspend your registration or access
            to our Sites, or to discontinue any site or site feature at any time without notice.
            You are responsible for your Internet Service Provider fees and any other fees
            related to your use of our Sites.
          </p>
        </Section>
        <Section title="Content">
          <p>
            All intellectual property rights including text, graphics, user interfaces,
            visual interfaces, photographs, trademarks, logos, sounds, music, artwork and
            computer code (collectively, “Content”), including but not
            limited to the design, structure, selection, coordination, expression, “look and feel”
            and arrangement of such Content, contained on the Site is owned, controlled or licensed
            by or to {companyAlias}, and is protected by trade dress, copyright, patent and trademark
            laws, and various other intellectual property rights and unfair competition laws.
          </p>
          <p>
            Except as expressly provided
            in these Agreement, no part of the Site and no Content may be copied, reproduced,
            republished, uploaded, posted, publicly displayed, encoded, translated,
            transmitted, disassembled, de-compiled, reverse engineered or distributed in any way
            (including “mirroring”) to any other computer, server, website or other medium for
            publication or distribution or for any commercial purpose, without {companyAlias}’s
            express prior written consent.
          </p>
        </Section>
        <Section title="Account & Security">
          <p>
            Certain features or services offered on or through the Site may require you to open an
            account (including setting up an {companyAlias} ID and password). You are entirely responsible
            for maintaining the confidentiality of the information you hold for your account,
            including your password, and for any and all activity that occurs under your account
            as a result of your failing to keep this information secure and confidential. You
            agree to notify {companyAlias} immediately of any unauthorized use of your account or
            password, or any other breach of security. You may be held liable for losses
            incurred by {companyAlias} or any other user of or visitor to the Site due to someone else
            using your {companyAlias} ID, password or account as a result of your failing to keep your
            account information secure and confidential.
          </p>
        </Section>
        <Section title="Your Use of the Site">
          <p>
            You may not use any “deep-link”, “page-scrape”, “robot”, “spider” or other
            automatic device, program, algorithm or methodology, or any similar or equivalent
            manual process, to access, acquire, copy or monitor any portion of the Site or any
            Content, or in any way reproduce or circumvent the navigational structure or presentation
            of the Site or any Content, to obtain or attempt to obtain any materials, documents or
            information through any means not purposely made available through the Site. {companyAlias} reserves
            the right to bar any such activity.
          </p>
          <p>
            You may not use anyone else’s {companyAlias} ID, password or account at any time without the express
            permission and consent of the holder of that {companyAlias} ID, password or account. {companyAlias} cannot
            and will not be liable for any loss or damage arising from your failure to comply with these obligations.
          </p>
          <p>
            You may not attempt to gain unauthorized access to any portion or feature of the Site,
            or any other systems or networks connected to the Site or to any server owned by {companyAlias}
            or to any of the services offered on or through the Site, by hacking, password “mining” or any other
            illegitimate means.
          </p>
          <p>
            You may not probe, scan or test the vulnerability of the Site or any network connected to the
            Site, nor breach the security or authentication measures on the Site or any network connected
            to the Site. You may not reverse look-up, trace or seek to trace any information on any other
            user of or visitor to the Site, or any other customer of {companyAlias}, including any {companyAlias} account
            not owned by you, to its source, or exploit the Site or any service or information made
            available or offered by or through the Site, in any way where the purpose is to reveal
            any information, including but not limited to personal identification or information,
            other than your own information, as provided for by the Site.
          </p>
          <p>
            You agree that you will not take any action that imposes an unreasonable or disproportionately
            large load on the infrastructure of the Site or {companyAlias}’s systems or networks, or any systems or
            networks connected to the Site or to {companyAlias}.
          </p>
          <p>
            You agree not to use any device, software or routine to interfere or attempt to interfere with the
            proper working of the Site or any transaction being conducted on the Site, or with any other
            person’s use of the Site.
          </p>
          <p>
            You may not forge headers or otherwise manipulate identifiers in order to disguise the origin of
            any message or transmittal you send to {companyAlias} on or through the Site or any service offered on or
            through the Site. You may not pretend that you are, or that you represent, someone else,
            or impersonate any other individual or entity.
          </p>
          <p>
            You may not use the Site or any Content for any purpose that is unlawful or prohibited by this
            Agreement, or to solicit the performance of any illegal activity or other activity which
            infringes the rights of {companyAlias} or others.
          </p>
        </Section>
        <Section title="User-Generated Content">
          <p>
            You are entirely responsible for any text, video, audio, images, photographs or
            any other materials or Content you provide for our Sites. Please use any available
            community tools responsibly. In particular, do not post Content that infringes the
            law or third party rights, or which includes activities or statements which are
            discriminatory, offensive, obscene or defamatory or which may cause offence to
            others on grounds of nationality, ethnicity, gender, sexuality, religion, faith
            or disability. You should not use the community areas for any commercial purpose.
          </p>
          <p>
            You grant us a perpetual, worldwide, non-exclusive, royalty-free and fully
            transferable right to use, copy, modify, publish and display any Content
            which you post or upload on our Sites, and to incorporate it in other works.
            You waive any moral rights which you may have in this Content.
          </p>
          <p>
            You understand that we do not monitor all user-generated Content on our Sites
            and we are under no obligation to do so. However, we reserve the right to
            monitor all such Content and, without notice, to edit, delete or remove any
            Content which we deem to be inappropriate. The views expressed in the community
            areas are those of members of the public and are not those of {companyAlias}, our affiliated
            companies, licensors or partners. If you believe that any Content breaches this
            Agreement, please report to us on {email.report}, or use the Alert
            button (if available), with details of the breach, the username of the person
            responsible and the area of the site where it happened.
          </p>
        </Section>
        <Section title="Links to Other Sites">
          <p>
            This Site may contain links to other independent third-party Web sites (“Linked Sites”).
            These Linked Sites are not approved, checked or verified and
            we are not responsible or liable in any way for their Content. Your use of
            third party Sites will be subject to the terms and conditions of those Sites. 
          </p>
        </Section>
        <Section title="Limitation of Liability">
          <p>
            Except where prohibited by law, in no event will {companyAlias} be liable to you for any
            indirect, consequential, exemplary, incidental or punitive damages, including
            lost profits, even if {companyAlias} has been advised of the possibility of such damages.
          </p>
        </Section>
        <Section title="Indemnity">
          <p>
            You agree to indemnify and hold {companyAlias}, its officers, directors, shareholders, predecessors,
            successors in interest, employees, agents, subsidiaries and affiliates, harmless from any
            demands, loss, liability, claims or expenses (including attorneys’ fees), made against
            {companyAlias} by any third party due to or arising out of or in connection with your use of the Site.
          </p>
        </Section>
        <Section title="Governing Law">
          <p>
            These Terms of Service are governed by {companyOrigin.adjective} law. The contract between you and {companyAlias} is formed in {companyOrigin.noun}.
          </p>
        </Section>
        <Section title="Feedback">
          <p>
            Feedback can be sent to the following email address: {email.feedback}. 
            Any feedback you provide at this site shall be deemed to be non-confidential and {companyAlias} shall
            be free to use such information on an unrestricted basis.
          </p>
        </Section>
      </PageLayout>
    );
  }
};
