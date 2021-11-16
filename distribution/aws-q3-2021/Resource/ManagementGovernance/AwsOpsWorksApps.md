# AwsOpsWorksApps


```text
aws-q3-2021/Resource/ManagementGovernance/AwsOpsWorksApps
```

```text
include('aws-q3-2021/Resource/ManagementGovernance/AwsOpsWorksApps')
```



| Illustration | AwsOpsWorksApps | AwsOpsWorksAppsCard | AwsOpsWorksAppsGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q3-2021/Resource/ManagementGovernance/AwsOpsWorksApps.png) | ![illustration for AwsOpsWorksApps](../../../aws-q3-2021/Resource/ManagementGovernance/AwsOpsWorksApps.Local.png) | ![illustration for AwsOpsWorksAppsCard](../../../aws-q3-2021/Resource/ManagementGovernance/AwsOpsWorksAppsCard.Local.png) | ![illustration for AwsOpsWorksAppsGroup](../../../aws-q3-2021/Resource/ManagementGovernance/AwsOpsWorksAppsGroup.Local.png) |




## AwsOpsWorksApps

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element AwsOpsWorksApps
include('aws-q3-2021/Resource/ManagementGovernance/AwsOpsWorksApps')

' renders the element
AwsOpsWorksApps('AwsOpsWorksApps', 'Aws Ops Works Apps', 'an optional tech label')
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
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element AwsOpsWorksApps
include('aws-q3-2021/Resource/ManagementGovernance/AwsOpsWorksApps')

' renders the element
AwsOpsWorksApps('AwsOpsWorksApps', 'Aws Ops Works Apps', 'an optional tech label')
@enduml
```

## AwsOpsWorksAppsCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element AwsOpsWorksAppsCard
include('aws-q3-2021/Resource/ManagementGovernance/AwsOpsWorksApps')

' renders the element
AwsOpsWorksAppsCard('AwsOpsWorksAppsCard', 'Aws Ops Works Apps Card', 'an optional description')
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
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element AwsOpsWorksAppsCard
include('aws-q3-2021/Resource/ManagementGovernance/AwsOpsWorksApps')

' renders the element
AwsOpsWorksAppsCard('AwsOpsWorksAppsCard', 'Aws Ops Works Apps Card', 'an optional description')
@enduml
```

## AwsOpsWorksAppsGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element AwsOpsWorksAppsGroup
include('aws-q3-2021/Resource/ManagementGovernance/AwsOpsWorksApps')

' renders the element
AwsOpsWorksAppsGroup('AwsOpsWorksAppsGroup', 'Aws Ops Works Apps Group', 'an optional tech label') {
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
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element AwsOpsWorksAppsGroup
include('aws-q3-2021/Resource/ManagementGovernance/AwsOpsWorksApps')

' renders the element
AwsOpsWorksAppsGroup('AwsOpsWorksAppsGroup', 'Aws Ops Works Apps Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

