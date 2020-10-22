# Aws Workspaces

```text
aws-20200430/Item/EndUserComputing/AwsWorkspaces
```

```text
include('aws-20200430/Item/EndUserComputing/AwsWorkspaces')
```

|icon|card|element|group|
|---|---|---|---|
|![](AwsWorkspaces.png)|![](AwsWorkspaces.card.png)|![](AwsWorkspaces.element.png)|![](AwsWorkspaces.group.png)|



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
' loads the AwsWorkspaces element
include('aws-20200430/Item/EndUserComputing/AwsWorkspaces')
AwsWorkspacesCard('aws_workspaces', 'Aws Workspaces', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsWorkspaces element
include('aws-20200430/Item/EndUserComputing/AwsWorkspaces')
AwsWorkspacesCard('aws_workspaces', 'Aws Workspaces', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsWorkspaces element
include('aws-20200430/Item/EndUserComputing/AwsWorkspaces')
AwsWorkspaces('aws_workspaces', 'Aws Workspaces', 'an optional tech field')
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
' loads the AwsWorkspaces element
include('aws-20200430/Item/EndUserComputing/AwsWorkspaces')
AwsWorkspaces('aws_workspaces', 'Aws Workspaces', 'an optional tech field')
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
' loads the AwsWorkspaces element
include('aws-20200430/Item/EndUserComputing/AwsWorkspaces')
AwsWorkspacesGroup('aws_workspaces', 'Aws Workspaces', 'an optional tech field'){
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
' loads the AwsWorkspaces element
include('aws-20200430/Item/EndUserComputing/AwsWorkspaces')
AwsWorkspacesGroup('aws_workspaces', 'Aws Workspaces', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

