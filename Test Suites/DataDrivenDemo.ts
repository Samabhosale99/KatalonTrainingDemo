<?xml version="1.0" encoding="UTF-8"?>
<TestSuiteEntity>
   <description></description>
   <name>DataDrivenDemo</name>
   <tag></tag>
   <isRerun>false</isRerun>
   <mailRecipient></mailRecipient>
   <numberOfRerun>3</numberOfRerun>
   <pageLoadTimeout>30</pageLoadTimeout>
   <pageLoadTimeoutDefault>true</pageLoadTimeoutDefault>
   <rerunFailedTestCasesOnly>false</rerunFailedTestCasesOnly>
   <rerunImmediately>true</rerunImmediately>
   <testSuiteGuid>eb10bca8-0ea7-4010-a5b9-dd5624aaef9e</testSuiteGuid>
   <testCaseLink>
      <guid>723f95cf-e86b-42b7-b010-db812786d7f2</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <iterationNameVariable>
         <defaultValue>''</defaultValue>
         <description></description>
         <id>454d50da-079a-4e92-992f-3f8e58c4befc</id>
         <masked>false</masked>
         <name>username</name>
      </iterationNameVariable>
      <testCaseId>Test Cases/DataDrivenTestDemo</testCaseId>
      <testDataLink>
         <combinationType>ONE</combinationType>
         <id>c4d2b987-af27-4da5-a01b-2b4de4daf6db</id>
         <iterationEntity>
            <iterationType>ALL</iterationType>
            <value></value>
         </iterationEntity>
         <testDataId>Data Files/LoginCredentials</testDataId>
      </testDataLink>
      <usingDataBindingAtTestSuiteLevel>true</usingDataBindingAtTestSuiteLevel>
      <variableLink>
         <testDataLinkId>c4d2b987-af27-4da5-a01b-2b4de4daf6db</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>username</value>
         <variableId>454d50da-079a-4e92-992f-3f8e58c4befc</variableId>
      </variableLink>
      <variableLink>
         <testDataLinkId>c4d2b987-af27-4da5-a01b-2b4de4daf6db</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>password</value>
         <variableId>d74dba3d-9828-4804-a400-99fa9c78f099</variableId>
      </variableLink>
   </testCaseLink>
</TestSuiteEntity>
