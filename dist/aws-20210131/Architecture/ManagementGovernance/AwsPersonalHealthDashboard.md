# Aws Personal Health Dashboard

```text
aws-20210131/Architecture/ManagementGovernance/AwsPersonalHealthDashboard
```

```text
include('aws-20210131/Architecture/ManagementGovernance/AwsPersonalHealthDashboard')
```

|icon|card|element|group|
|---|---|---|---|
|![](AwsPersonalHealthDashboard.png)|![](AwsPersonalHealthDashboard.card.png)|![](AwsPersonalHealthDashboard.element.png)|![](AwsPersonalHealthDashboard.group.png)|



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
' loads the AwsPersonalHealthDashboard element
include('aws-20210131/Architecture/ManagementGovernance/AwsPersonalHealthDashboard')
AwsPersonalHealthDashboardCard('aws_personal_health_dashboard', 'Aws Personal Health Dashboard', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsPersonalHealthDashboard element
include('aws-20210131/Architecture/ManagementGovernance/AwsPersonalHealthDashboard')
AwsPersonalHealthDashboardCard('aws_personal_health_dashboard', 'Aws Personal Health Dashboard', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsPersonalHealthDashboard element
include('aws-20210131/Architecture/ManagementGovernance/AwsPersonalHealthDashboard')
AwsPersonalHealthDashboard('aws_personal_health_dashboard', 'Aws Personal Health Dashboard', 'an optional tech field')
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
' loads the AwsPersonalHealthDashboard element
include('aws-20210131/Architecture/ManagementGovernance/AwsPersonalHealthDashboard')
AwsPersonalHealthDashboard('aws_personal_health_dashboard', 'Aws Personal Health Dashboard', 'an optional tech field')
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
' loads the AwsPersonalHealthDashboard element
include('aws-20210131/Architecture/ManagementGovernance/AwsPersonalHealthDashboard')
AwsPersonalHealthDashboardGroup('aws_personal_health_dashboard', 'Aws Personal Health Dashboard', 'an optional tech field'){
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
' loads the AwsPersonalHealthDashboard element
include('aws-20210131/Architecture/ManagementGovernance/AwsPersonalHealthDashboard')
AwsPersonalHealthDashboardGroup('aws_personal_health_dashboard', 'Aws Personal Health Dashboard', 'an optional tech field'){
  note as note
  the content of the group
  end note
}
@enduml
```

