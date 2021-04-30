# Aws Launch Wizard

```text
aws-20210131/Architecture/ManagementGovernance/AwsLaunchWizard
```

```text
include('aws-20210131/Architecture/ManagementGovernance/AwsLaunchWizard')
```

|icon|card|element|group|
|---|---|---|---|
|![](AwsLaunchWizard.png)|![](AwsLaunchWizard.card.png)|![](AwsLaunchWizard.element.png)|![](AwsLaunchWizard.group.png)|



## card
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the aws-20210131 bootstrap
include('aws-20210131/bootstrap')
' loads the AwsLaunchWizard element
include('aws-20210131/Architecture/ManagementGovernance/AwsLaunchWizard')
AwsLaunchWizardCard('aws_launch_wizard', 'Aws Launch Wizard', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the aws-20210131 bootstrap
include('aws-20210131/bootstrap')
' loads the AwsLaunchWizard element
include('aws-20210131/Architecture/ManagementGovernance/AwsLaunchWizard')
AwsLaunchWizardCard('aws_launch_wizard', 'Aws Launch Wizard', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the aws-20210131 bootstrap
include('aws-20210131/bootstrap')
' loads the AwsLaunchWizard element
include('aws-20210131/Architecture/ManagementGovernance/AwsLaunchWizard')
AwsLaunchWizard('aws_launch_wizard', 'Aws Launch Wizard', 'an optional tech field')
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
' loads the aws-20210131 bootstrap
include('aws-20210131/bootstrap')
' loads the AwsLaunchWizard element
include('aws-20210131/Architecture/ManagementGovernance/AwsLaunchWizard')
AwsLaunchWizard('aws_launch_wizard', 'Aws Launch Wizard', 'an optional tech field')
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
' loads the aws-20210131 bootstrap
include('aws-20210131/bootstrap')
' loads the AwsLaunchWizard element
include('aws-20210131/Architecture/ManagementGovernance/AwsLaunchWizard')
AwsLaunchWizardGroup('aws_launch_wizard', 'Aws Launch Wizard', 'an optional tech field'){
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
' loads the aws-20210131 bootstrap
include('aws-20210131/bootstrap')
' loads the AwsLaunchWizard element
include('aws-20210131/Architecture/ManagementGovernance/AwsLaunchWizard')
AwsLaunchWizardGroup('aws_launch_wizard', 'Aws Launch Wizard', 'an optional tech field'){
  note as note
  the content of the group
  end note
}
@enduml
```

