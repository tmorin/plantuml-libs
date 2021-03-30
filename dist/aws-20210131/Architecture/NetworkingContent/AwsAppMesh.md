# Aws App Mesh

```text
aws-20210131/Architecture/NetworkingContent/AwsAppMesh
```

```text
include('aws-20210131/Architecture/NetworkingContent/AwsAppMesh')
```

|icon|card|element|group|
|---|---|---|---|
|![](AwsAppMesh.png)|![](AwsAppMesh.card.png)|![](AwsAppMesh.element.png)|![](AwsAppMesh.group.png)|



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
' loads the AwsAppMesh element
include('aws-20210131/Architecture/NetworkingContent/AwsAppMesh')
AwsAppMeshCard('aws_app_mesh', 'Aws App Mesh', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsAppMesh element
include('aws-20210131/Architecture/NetworkingContent/AwsAppMesh')
AwsAppMeshCard('aws_app_mesh', 'Aws App Mesh', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsAppMesh element
include('aws-20210131/Architecture/NetworkingContent/AwsAppMesh')
AwsAppMesh('aws_app_mesh', 'Aws App Mesh', 'an optional tech field')
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
' loads the AwsAppMesh element
include('aws-20210131/Architecture/NetworkingContent/AwsAppMesh')
AwsAppMesh('aws_app_mesh', 'Aws App Mesh', 'an optional tech field')
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
' loads the AwsAppMesh element
include('aws-20210131/Architecture/NetworkingContent/AwsAppMesh')
AwsAppMeshGroup('aws_app_mesh', 'Aws App Mesh', 'an optional tech field'){
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
' loads the AwsAppMesh element
include('aws-20210131/Architecture/NetworkingContent/AwsAppMesh')
AwsAppMeshGroup('aws_app_mesh', 'Aws App Mesh', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

