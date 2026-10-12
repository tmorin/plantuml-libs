# AwsHealthDashboard


```text
aws/Architecture/ManagementTools/AwsHealthDashboard
```

```text
include('aws/Architecture/ManagementTools/AwsHealthDashboard')
```



| Illustration | AwsHealthDashboard | AwsHealthDashboardCard | AwsHealthDashboardGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws/Architecture/ManagementTools/AwsHealthDashboard.png) | ![illustration for AwsHealthDashboard](../../../aws/Architecture/ManagementTools/AwsHealthDashboard.Local.png) | ![illustration for AwsHealthDashboardCard](../../../aws/Architecture/ManagementTools/AwsHealthDashboardCard.Local.png) | ![illustration for AwsHealthDashboardGroup](../../../aws/Architecture/ManagementTools/AwsHealthDashboardGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AwsHealthDashboardXs>`
- `<$AwsHealthDashboardSm>`
- `<$AwsHealthDashboardMd>`
- `<$AwsHealthDashboardLg>`





## AwsHealthDashboard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws/bootstrap')

' loads the Item which embeds the element AwsHealthDashboard
include('aws/Architecture/ManagementTools/AwsHealthDashboard')

' renders the element
AwsHealthDashboard('AwsHealthDashboard', 'Aws Health Dashboard', 'an optional tech label', 'an optional description')
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
include('aws/bootstrap')

' loads the Item which embeds the element AwsHealthDashboard
include('aws/Architecture/ManagementTools/AwsHealthDashboard')

' renders the element
AwsHealthDashboard('AwsHealthDashboard', 'Aws Health Dashboard', 'an optional tech label', 'an optional description')
@enduml
```

## AwsHealthDashboardCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws/bootstrap')

' loads the Item which embeds the element AwsHealthDashboardCard
include('aws/Architecture/ManagementTools/AwsHealthDashboard')

' renders the element
AwsHealthDashboardCard('AwsHealthDashboardCard', 'Aws Health Dashboard Card', 'an optional description')
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
include('aws/bootstrap')

' loads the Item which embeds the element AwsHealthDashboardCard
include('aws/Architecture/ManagementTools/AwsHealthDashboard')

' renders the element
AwsHealthDashboardCard('AwsHealthDashboardCard', 'Aws Health Dashboard Card', 'an optional description')
@enduml
```

## AwsHealthDashboardGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws/bootstrap')

' loads the Item which embeds the element AwsHealthDashboardGroup
include('aws/Architecture/ManagementTools/AwsHealthDashboard')

' renders the element
AwsHealthDashboardGroup('AwsHealthDashboardGroup', 'Aws Health Dashboard Group', 'an optional tech label') {
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
include('aws/bootstrap')

' loads the Item which embeds the element AwsHealthDashboardGroup
include('aws/Architecture/ManagementTools/AwsHealthDashboard')

' renders the element
AwsHealthDashboardGroup('AwsHealthDashboardGroup', 'Aws Health Dashboard Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

