# Aws Control Tower

```text
aws-20200430/Item/ManagementGovernance/AwsControlTower
```

```text
include('aws-20200430/Item/ManagementGovernance/AwsControlTower')
```

|icon|card|element|group|
|---|---|---|---|
|![](AwsControlTower.png)|![](AwsControlTower.card.png)|![](AwsControlTower.element.png)|![](AwsControlTower.group.png)|



## card
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the aws-20200430 bootstrap
include('aws-20200430/bootstrap')
' loads the AwsControlTower element
include('aws-20200430/Item/ManagementGovernance/AwsControlTower')
AwsControlTowerCard('aws_control_tower', 'Aws Control Tower', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the aws-20200430 bootstrap
include('aws-20200430/bootstrap')
' loads the AwsControlTower element
include('aws-20200430/Item/ManagementGovernance/AwsControlTower')
AwsControlTowerCard('aws_control_tower', 'Aws Control Tower', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the aws-20200430 bootstrap
include('aws-20200430/bootstrap')
' loads the AwsControlTower element
include('aws-20200430/Item/ManagementGovernance/AwsControlTower')
AwsControlTower('aws_control_tower', 'Aws Control Tower', 'an optional tech field')
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
' loads the aws-20200430 bootstrap
include('aws-20200430/bootstrap')
' loads the AwsControlTower element
include('aws-20200430/Item/ManagementGovernance/AwsControlTower')
AwsControlTower('aws_control_tower', 'Aws Control Tower', 'an optional tech field')
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
' loads the aws-20200430 bootstrap
include('aws-20200430/bootstrap')
' loads the AwsControlTower element
include('aws-20200430/Item/ManagementGovernance/AwsControlTower')
AwsControlTowerGroup('aws_control_tower', 'Aws Control Tower', 'an optional tech field'){
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
' loads the aws-20200430 bootstrap
include('aws-20200430/bootstrap')
' loads the AwsControlTower element
include('aws-20200430/Item/ManagementGovernance/AwsControlTower')
AwsControlTowerGroup('aws_control_tower', 'Aws Control Tower', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

