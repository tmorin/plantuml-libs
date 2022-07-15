# AwsLaunchWizard


```text
aws-q2-2022/Architecture/ManagementGovernance/AwsLaunchWizard
```

```text
include('aws-q2-2022/Architecture/ManagementGovernance/AwsLaunchWizard')
```



| Illustration | AwsLaunchWizard | AwsLaunchWizardCard | AwsLaunchWizardGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q2-2022/Architecture/ManagementGovernance/AwsLaunchWizard.png) | ![illustration for AwsLaunchWizard](../../../aws-q2-2022/Architecture/ManagementGovernance/AwsLaunchWizard.Local.png) | ![illustration for AwsLaunchWizardCard](../../../aws-q2-2022/Architecture/ManagementGovernance/AwsLaunchWizardCard.Local.png) | ![illustration for AwsLaunchWizardGroup](../../../aws-q2-2022/Architecture/ManagementGovernance/AwsLaunchWizardGroup.Local.png) |




## AwsLaunchWizard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2022/bootstrap')

' loads the Item which embeds the element AwsLaunchWizard
include('aws-q2-2022/Architecture/ManagementGovernance/AwsLaunchWizard')

' renders the element
AwsLaunchWizard('AwsLaunchWizard', 'Aws Launch Wizard', 'an optional tech label')
@enduml
```

### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2022/bootstrap')

' loads the Item which embeds the element AwsLaunchWizard
include('aws-q2-2022/Architecture/ManagementGovernance/AwsLaunchWizard')

' renders the element
AwsLaunchWizard('AwsLaunchWizard', 'Aws Launch Wizard', 'an optional tech label')
@enduml
```

## AwsLaunchWizardCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2022/bootstrap')

' loads the Item which embeds the element AwsLaunchWizardCard
include('aws-q2-2022/Architecture/ManagementGovernance/AwsLaunchWizard')

' renders the element
AwsLaunchWizardCard('AwsLaunchWizardCard', 'Aws Launch Wizard Card', 'an optional description')
@enduml
```

### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2022/bootstrap')

' loads the Item which embeds the element AwsLaunchWizardCard
include('aws-q2-2022/Architecture/ManagementGovernance/AwsLaunchWizard')

' renders the element
AwsLaunchWizardCard('AwsLaunchWizardCard', 'Aws Launch Wizard Card', 'an optional description')
@enduml
```

## AwsLaunchWizardGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2022/bootstrap')

' loads the Item which embeds the element AwsLaunchWizardGroup
include('aws-q2-2022/Architecture/ManagementGovernance/AwsLaunchWizard')

' renders the element
AwsLaunchWizardGroup('AwsLaunchWizardGroup', 'Aws Launch Wizard Group', 'an optional tech label') {
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

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2022/bootstrap')

' loads the Item which embeds the element AwsLaunchWizardGroup
include('aws-q2-2022/Architecture/ManagementGovernance/AwsLaunchWizard')

' renders the element
AwsLaunchWizardGroup('AwsLaunchWizardGroup', 'Aws Launch Wizard Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

