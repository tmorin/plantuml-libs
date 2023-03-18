# AwsLaunchWizard


```text
aws-q1-2023/Architecture/ManagementGovernance/AwsLaunchWizard
```

```text
include('aws-q1-2023/Architecture/ManagementGovernance/AwsLaunchWizard')
```



| Illustration | AwsLaunchWizard | AwsLaunchWizardCard | AwsLaunchWizardGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q1-2023/Architecture/ManagementGovernance/AwsLaunchWizard.png) | ![illustration for AwsLaunchWizard](../../../aws-q1-2023/Architecture/ManagementGovernance/AwsLaunchWizard.Local.png) | ![illustration for AwsLaunchWizardCard](../../../aws-q1-2023/Architecture/ManagementGovernance/AwsLaunchWizardCard.Local.png) | ![illustration for AwsLaunchWizardGroup](../../../aws-q1-2023/Architecture/ManagementGovernance/AwsLaunchWizardGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AwsLaunchWizardXs>`
- `<$AwsLaunchWizardSm>`
- `<$AwsLaunchWizardMd>`
- `<$AwsLaunchWizardLg>`





## AwsLaunchWizard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2023/bootstrap')

' loads the Item which embeds the element AwsLaunchWizard
include('aws-q1-2023/Architecture/ManagementGovernance/AwsLaunchWizard')

' renders the element
AwsLaunchWizard('AwsLaunchWizard', 'Aws Launch Wizard', 'an optional tech label', 'an optional description')
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
include('aws-q1-2023/bootstrap')

' loads the Item which embeds the element AwsLaunchWizard
include('aws-q1-2023/Architecture/ManagementGovernance/AwsLaunchWizard')

' renders the element
AwsLaunchWizard('AwsLaunchWizard', 'Aws Launch Wizard', 'an optional tech label', 'an optional description')
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
include('aws-q1-2023/bootstrap')

' loads the Item which embeds the element AwsLaunchWizardCard
include('aws-q1-2023/Architecture/ManagementGovernance/AwsLaunchWizard')

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
include('aws-q1-2023/bootstrap')

' loads the Item which embeds the element AwsLaunchWizardCard
include('aws-q1-2023/Architecture/ManagementGovernance/AwsLaunchWizard')

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
include('aws-q1-2023/bootstrap')

' loads the Item which embeds the element AwsLaunchWizardGroup
include('aws-q1-2023/Architecture/ManagementGovernance/AwsLaunchWizard')

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
include('aws-q1-2023/bootstrap')

' loads the Item which embeds the element AwsLaunchWizardGroup
include('aws-q1-2023/Architecture/ManagementGovernance/AwsLaunchWizard')

' renders the element
AwsLaunchWizardGroup('AwsLaunchWizardGroup', 'Aws Launch Wizard Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

