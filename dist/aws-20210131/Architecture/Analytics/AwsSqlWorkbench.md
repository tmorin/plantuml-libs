# Aws Sql Workbench

```text
aws-20210131/Architecture/Analytics/AwsSqlWorkbench
```

```text
include('aws-20210131/Architecture/Analytics/AwsSqlWorkbench')
```

|icon|card|element|group|
|---|---|---|---|
|![](AwsSqlWorkbench.png)|![](AwsSqlWorkbench.card.png)|![](AwsSqlWorkbench.element.png)|![](AwsSqlWorkbench.group.png)|



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
' loads the AwsSqlWorkbench element
include('aws-20210131/Architecture/Analytics/AwsSqlWorkbench')
AwsSqlWorkbenchCard('aws_sql_workbench', 'Aws Sql Workbench', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsSqlWorkbench element
include('aws-20210131/Architecture/Analytics/AwsSqlWorkbench')
AwsSqlWorkbenchCard('aws_sql_workbench', 'Aws Sql Workbench', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsSqlWorkbench element
include('aws-20210131/Architecture/Analytics/AwsSqlWorkbench')
AwsSqlWorkbench('aws_sql_workbench', 'Aws Sql Workbench', 'an optional tech field')
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
' loads the AwsSqlWorkbench element
include('aws-20210131/Architecture/Analytics/AwsSqlWorkbench')
AwsSqlWorkbench('aws_sql_workbench', 'Aws Sql Workbench', 'an optional tech field')
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
' loads the AwsSqlWorkbench element
include('aws-20210131/Architecture/Analytics/AwsSqlWorkbench')
AwsSqlWorkbenchGroup('aws_sql_workbench', 'Aws Sql Workbench', 'an optional tech field'){
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
' loads the AwsSqlWorkbench element
include('aws-20210131/Architecture/Analytics/AwsSqlWorkbench')
AwsSqlWorkbenchGroup('aws_sql_workbench', 'Aws Sql Workbench', 'an optional tech field'){
  note as note
  the content of the group
  end note
}
@enduml
```

