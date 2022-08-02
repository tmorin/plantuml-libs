# AwsPersonalHealthDashboard


```text
aws-q1-2022/Architecture/ManagementGovernance/AwsPersonalHealthDashboard
```

```text
include('aws-q1-2022/Architecture/ManagementGovernance/AwsPersonalHealthDashboard')
```



| Illustration | AwsPersonalHealthDashboard | AwsPersonalHealthDashboardCard | AwsPersonalHealthDashboardGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q1-2022/Architecture/ManagementGovernance/AwsPersonalHealthDashboard.png) | ![illustration for AwsPersonalHealthDashboard](../../../aws-q1-2022/Architecture/ManagementGovernance/AwsPersonalHealthDashboard.Local.png) | ![illustration for AwsPersonalHealthDashboardCard](../../../aws-q1-2022/Architecture/ManagementGovernance/AwsPersonalHealthDashboardCard.Local.png) | ![illustration for AwsPersonalHealthDashboardGroup](../../../aws-q1-2022/Architecture/ManagementGovernance/AwsPersonalHealthDashboardGroup.Local.png) |




## AwsPersonalHealthDashboard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2022/bootstrap')

' loads the Item which embeds the element AwsPersonalHealthDashboard
include('aws-q1-2022/Architecture/ManagementGovernance/AwsPersonalHealthDashboard')

' renders the element
AwsPersonalHealthDashboard('AwsPersonalHealthDashboard', 'Aws Personal Health Dashboard', 'an optional tech label', 'an optional description')
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
include('aws-q1-2022/bootstrap')

' loads the Item which embeds the element AwsPersonalHealthDashboard
include('aws-q1-2022/Architecture/ManagementGovernance/AwsPersonalHealthDashboard')

' renders the element
AwsPersonalHealthDashboard('AwsPersonalHealthDashboard', 'Aws Personal Health Dashboard', 'an optional tech label', 'an optional description')
@enduml
```

## AwsPersonalHealthDashboardCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2022/bootstrap')

' loads the Item which embeds the element AwsPersonalHealthDashboardCard
include('aws-q1-2022/Architecture/ManagementGovernance/AwsPersonalHealthDashboard')

' renders the element
AwsPersonalHealthDashboardCard('AwsPersonalHealthDashboardCard', 'Aws Personal Health Dashboard Card', 'an optional description')
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
include('aws-q1-2022/bootstrap')

' loads the Item which embeds the element AwsPersonalHealthDashboardCard
include('aws-q1-2022/Architecture/ManagementGovernance/AwsPersonalHealthDashboard')

' renders the element
AwsPersonalHealthDashboardCard('AwsPersonalHealthDashboardCard', 'Aws Personal Health Dashboard Card', 'an optional description')
@enduml
```

## AwsPersonalHealthDashboardGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2022/bootstrap')

' loads the Item which embeds the element AwsPersonalHealthDashboardGroup
include('aws-q1-2022/Architecture/ManagementGovernance/AwsPersonalHealthDashboard')

' renders the element
AwsPersonalHealthDashboardGroup('AwsPersonalHealthDashboardGroup', 'Aws Personal Health Dashboard Group', 'an optional tech label') {
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
include('aws-q1-2022/bootstrap')

' loads the Item which embeds the element AwsPersonalHealthDashboardGroup
include('aws-q1-2022/Architecture/ManagementGovernance/AwsPersonalHealthDashboard')

' renders the element
AwsPersonalHealthDashboardGroup('AwsPersonalHealthDashboardGroup', 'Aws Personal Health Dashboard Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

