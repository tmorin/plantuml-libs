# Aws Cost Management

```text
aws-20210131/Category/AwsCostManagement
```

```text
include('aws-20210131/Category/AwsCostManagement')
```

|icon|card|element|group|
|---|---|---|---|
|![](AwsCostManagement.png)|![](AwsCostManagement.card.png)|![](AwsCostManagement.element.png)|![](AwsCostManagement.group.png)|



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
' loads the AwsCostManagement element
include('aws-20210131/Category/AwsCostManagement')
AwsCostManagementCard('aws_cost_management', 'Aws Cost Management', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../.."
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the aws-20210131 bootstrap
include('aws-20210131/bootstrap')
' loads the AwsCostManagement element
include('aws-20210131/Category/AwsCostManagement')
AwsCostManagementCard('aws_cost_management', 'Aws Cost Management', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsCostManagement element
include('aws-20210131/Category/AwsCostManagement')
AwsCostManagement('aws_cost_management', 'Aws Cost Management', 'an optional tech field')
@enduml
```
### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../.."
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the aws-20210131 bootstrap
include('aws-20210131/bootstrap')
' loads the AwsCostManagement element
include('aws-20210131/Category/AwsCostManagement')
AwsCostManagement('aws_cost_management', 'Aws Cost Management', 'an optional tech field')
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
' loads the AwsCostManagement element
include('aws-20210131/Category/AwsCostManagement')
AwsCostManagementGroup('aws_cost_management', 'Aws Cost Management', 'an optional tech field'){
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
!global $LIB_BASE_LOCATION="../.."
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the aws-20210131 bootstrap
include('aws-20210131/bootstrap')
' loads the AwsCostManagement element
include('aws-20210131/Category/AwsCostManagement')
AwsCostManagementGroup('aws_cost_management', 'Aws Cost Management', 'an optional tech field'){
  note as note
  the content of the group
  end note
}
@enduml
```

