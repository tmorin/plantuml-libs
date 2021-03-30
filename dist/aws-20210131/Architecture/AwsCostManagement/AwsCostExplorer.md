# Aws Cost Explorer

```text
aws-20210131/Architecture/AwsCostManagement/AwsCostExplorer
```

```text
include('aws-20210131/Architecture/AwsCostManagement/AwsCostExplorer')
```

|icon|card|element|group|
|---|---|---|---|
|![](AwsCostExplorer.png)|![](AwsCostExplorer.card.png)|![](AwsCostExplorer.element.png)|![](AwsCostExplorer.group.png)|



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
' loads the AwsCostExplorer element
include('aws-20210131/Architecture/AwsCostManagement/AwsCostExplorer')
AwsCostExplorerCard('aws_cost_explorer', 'Aws Cost Explorer', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsCostExplorer element
include('aws-20210131/Architecture/AwsCostManagement/AwsCostExplorer')
AwsCostExplorerCard('aws_cost_explorer', 'Aws Cost Explorer', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsCostExplorer element
include('aws-20210131/Architecture/AwsCostManagement/AwsCostExplorer')
AwsCostExplorer('aws_cost_explorer', 'Aws Cost Explorer', 'an optional tech field')
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
' loads the AwsCostExplorer element
include('aws-20210131/Architecture/AwsCostManagement/AwsCostExplorer')
AwsCostExplorer('aws_cost_explorer', 'Aws Cost Explorer', 'an optional tech field')
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
' loads the AwsCostExplorer element
include('aws-20210131/Architecture/AwsCostManagement/AwsCostExplorer')
AwsCostExplorerGroup('aws_cost_explorer', 'Aws Cost Explorer', 'an optional tech field'){
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
' loads the AwsCostExplorer element
include('aws-20210131/Architecture/AwsCostManagement/AwsCostExplorer')
AwsCostExplorerGroup('aws_cost_explorer', 'Aws Cost Explorer', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

