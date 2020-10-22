# Aws App Wizard

```text
aws-20200911/Service/ManagementGovernance/AwsAppWizard
```

```text
include('aws-20200911/Service/ManagementGovernance/AwsAppWizard')
```

|icon|card|element|group|
|---|---|---|---|
|![](AwsAppWizard.png)|![](AwsAppWizard.card.png)|![](AwsAppWizard.element.png)|![](AwsAppWizard.group.png)|



## card
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the aws-20200911 bootstrap
include('aws-20200911/bootstrap')
' loads the AwsAppWizard element
include('aws-20200911/Service/ManagementGovernance/AwsAppWizard')
AwsAppWizardCard('aws_app_wizard', 'Aws App Wizard', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../.."
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the aws-20200911 bootstrap
include('aws-20200911/bootstrap')
' loads the AwsAppWizard element
include('aws-20200911/Service/ManagementGovernance/AwsAppWizard')
AwsAppWizardCard('aws_app_wizard', 'Aws App Wizard', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```


## element
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the aws-20200911 bootstrap
include('aws-20200911/bootstrap')
' loads the AwsAppWizard element
include('aws-20200911/Service/ManagementGovernance/AwsAppWizard')
AwsAppWizard('aws_app_wizard', 'Aws App Wizard', 'an optional tech field')
@enduml
```
### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../.."
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the aws-20200911 bootstrap
include('aws-20200911/bootstrap')
' loads the AwsAppWizard element
include('aws-20200911/Service/ManagementGovernance/AwsAppWizard')
AwsAppWizard('aws_app_wizard', 'Aws App Wizard', 'an optional tech field')
@enduml
```


## group
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the aws-20200911 bootstrap
include('aws-20200911/bootstrap')
' loads the AwsAppWizard element
include('aws-20200911/Service/ManagementGovernance/AwsAppWizard')
AwsAppWizardGroup('aws_app_wizard', 'Aws App Wizard', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```
### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../.."
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the aws-20200911 bootstrap
include('aws-20200911/bootstrap')
' loads the AwsAppWizard element
include('aws-20200911/Service/ManagementGovernance/AwsAppWizard')
AwsAppWizardGroup('aws_app_wizard', 'Aws App Wizard', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

