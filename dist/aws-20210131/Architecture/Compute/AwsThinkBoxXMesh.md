# Aws Think Box X Mesh

```text
aws-20210131/Architecture/Compute/AwsThinkBoxXMesh
```

```text
include('aws-20210131/Architecture/Compute/AwsThinkBoxXMesh')
```

|icon|card|element|group|
|---|---|---|---|
|![](AwsThinkBoxXMesh.png)|![](AwsThinkBoxXMesh.card.png)|![](AwsThinkBoxXMesh.element.png)|![](AwsThinkBoxXMesh.group.png)|



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
' loads the AwsThinkBoxXMesh element
include('aws-20210131/Architecture/Compute/AwsThinkBoxXMesh')
AwsThinkBoxXMeshCard('aws_think_box_x_mesh', 'Aws Think Box X Mesh', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsThinkBoxXMesh element
include('aws-20210131/Architecture/Compute/AwsThinkBoxXMesh')
AwsThinkBoxXMeshCard('aws_think_box_x_mesh', 'Aws Think Box X Mesh', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsThinkBoxXMesh element
include('aws-20210131/Architecture/Compute/AwsThinkBoxXMesh')
AwsThinkBoxXMesh('aws_think_box_x_mesh', 'Aws Think Box X Mesh', 'an optional tech field')
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
' loads the AwsThinkBoxXMesh element
include('aws-20210131/Architecture/Compute/AwsThinkBoxXMesh')
AwsThinkBoxXMesh('aws_think_box_x_mesh', 'Aws Think Box X Mesh', 'an optional tech field')
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
' loads the AwsThinkBoxXMesh element
include('aws-20210131/Architecture/Compute/AwsThinkBoxXMesh')
AwsThinkBoxXMeshGroup('aws_think_box_x_mesh', 'Aws Think Box X Mesh', 'an optional tech field'){
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
' loads the AwsThinkBoxXMesh element
include('aws-20210131/Architecture/Compute/AwsThinkBoxXMesh')
AwsThinkBoxXMeshGroup('aws_think_box_x_mesh', 'Aws Think Box X Mesh', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

