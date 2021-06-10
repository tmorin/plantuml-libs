# AwsThinkBoxXMesh


```text
aws-20210131/Architecture/Compute/AwsThinkBoxXMesh
```

```text
include('aws-20210131/Architecture/Compute/AwsThinkBoxXMesh')
```



| Illustration | AwsThinkBoxXMesh | AwsThinkBoxXMeshCard | AwsThinkBoxXMeshGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-20210131/Architecture/Compute/AwsThinkBoxXMesh.png) | ![illustration for AwsThinkBoxXMesh](../../../aws-20210131/Architecture/Compute/AwsThinkBoxXMesh.Local.png) | ![illustration for AwsThinkBoxXMeshCard](../../../aws-20210131/Architecture/Compute/AwsThinkBoxXMeshCard.Local.png) | ![illustration for AwsThinkBoxXMeshGroup](../../../aws-20210131/Architecture/Compute/AwsThinkBoxXMeshGroup.Local.png) |




## AwsThinkBoxXMesh

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AwsThinkBoxXMesh
include('aws-20210131/Architecture/Compute/AwsThinkBoxXMesh')

' renders the element
AwsThinkBoxXMesh('AwsThinkBoxXMesh', 'Aws Think Box X Mesh', 'an optional tech label')
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
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AwsThinkBoxXMesh
include('aws-20210131/Architecture/Compute/AwsThinkBoxXMesh')

' renders the element
AwsThinkBoxXMesh('AwsThinkBoxXMesh', 'Aws Think Box X Mesh', 'an optional tech label')
@enduml
```

## AwsThinkBoxXMeshCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AwsThinkBoxXMeshCard
include('aws-20210131/Architecture/Compute/AwsThinkBoxXMesh')

' renders the element
AwsThinkBoxXMeshCard('AwsThinkBoxXMeshCard', 'Aws Think Box X Mesh Card', 'an optional description')
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
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AwsThinkBoxXMeshCard
include('aws-20210131/Architecture/Compute/AwsThinkBoxXMesh')

' renders the element
AwsThinkBoxXMeshCard('AwsThinkBoxXMeshCard', 'Aws Think Box X Mesh Card', 'an optional description')
@enduml
```

## AwsThinkBoxXMeshGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AwsThinkBoxXMeshGroup
include('aws-20210131/Architecture/Compute/AwsThinkBoxXMesh')

' renders the element
AwsThinkBoxXMeshGroup('AwsThinkBoxXMeshGroup', 'Aws Think Box X Mesh Group', 'an optional tech label') {
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
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AwsThinkBoxXMeshGroup
include('aws-20210131/Architecture/Compute/AwsThinkBoxXMesh')

' renders the element
AwsThinkBoxXMeshGroup('AwsThinkBoxXMeshGroup', 'Aws Think Box X Mesh Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

