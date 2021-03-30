# Aws Systems Manager

```text
aws-20210131/Architecture/ManagementGovernance/AwsSystemsManager
```

```text
include('aws-20210131/Architecture/ManagementGovernance/AwsSystemsManager')
```

|icon|card|element|group|
|---|---|---|---|
|![](AwsSystemsManager.png)|![](AwsSystemsManager.card.png)|![](AwsSystemsManager.element.png)|![](AwsSystemsManager.group.png)|



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
' loads the AwsSystemsManager element
include('aws-20210131/Architecture/ManagementGovernance/AwsSystemsManager')
AwsSystemsManagerCard('aws_systems_manager', 'Aws Systems Manager', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsSystemsManager element
include('aws-20210131/Architecture/ManagementGovernance/AwsSystemsManager')
AwsSystemsManagerCard('aws_systems_manager', 'Aws Systems Manager', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsSystemsManager element
include('aws-20210131/Architecture/ManagementGovernance/AwsSystemsManager')
AwsSystemsManager('aws_systems_manager', 'Aws Systems Manager', 'an optional tech field')
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
' loads the AwsSystemsManager element
include('aws-20210131/Architecture/ManagementGovernance/AwsSystemsManager')
AwsSystemsManager('aws_systems_manager', 'Aws Systems Manager', 'an optional tech field')
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
' loads the AwsSystemsManager element
include('aws-20210131/Architecture/ManagementGovernance/AwsSystemsManager')
AwsSystemsManagerGroup('aws_systems_manager', 'Aws Systems Manager', 'an optional tech field'){
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
' loads the AwsSystemsManager element
include('aws-20210131/Architecture/ManagementGovernance/AwsSystemsManager')
AwsSystemsManagerGroup('aws_systems_manager', 'Aws Systems Manager', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

