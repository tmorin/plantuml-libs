# AwsAppMesh


```text
aws-20210131/Architecture/NetworkingContent/AwsAppMesh
```

```text
include('aws-20210131/Architecture/NetworkingContent/AwsAppMesh')
```



| Illustration | AwsAppMesh | AwsAppMeshCard | AwsAppMeshGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-20210131/Architecture/NetworkingContent/AwsAppMesh.png) | ![illustration for AwsAppMesh](../../../aws-20210131/Architecture/NetworkingContent/AwsAppMesh.Local.png) | ![illustration for AwsAppMeshCard](../../../aws-20210131/Architecture/NetworkingContent/AwsAppMeshCard.Local.png) | ![illustration for AwsAppMeshGroup](../../../aws-20210131/Architecture/NetworkingContent/AwsAppMeshGroup.Local.png) |




## AwsAppMesh

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AwsAppMesh
include('aws-20210131/Architecture/NetworkingContent/AwsAppMesh')

' renders the element
AwsAppMesh('AwsAppMesh', 'Aws App Mesh', 'an optional tech label')
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

' loads the Item which embeds the element AwsAppMesh
include('aws-20210131/Architecture/NetworkingContent/AwsAppMesh')

' renders the element
AwsAppMesh('AwsAppMesh', 'Aws App Mesh', 'an optional tech label')
@enduml
```

## AwsAppMeshCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AwsAppMeshCard
include('aws-20210131/Architecture/NetworkingContent/AwsAppMesh')

' renders the element
AwsAppMeshCard('AwsAppMeshCard', 'Aws App Mesh Card', 'an optional description')
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

' loads the Item which embeds the element AwsAppMeshCard
include('aws-20210131/Architecture/NetworkingContent/AwsAppMesh')

' renders the element
AwsAppMeshCard('AwsAppMeshCard', 'Aws App Mesh Card', 'an optional description')
@enduml
```

## AwsAppMeshGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AwsAppMeshGroup
include('aws-20210131/Architecture/NetworkingContent/AwsAppMesh')

' renders the element
AwsAppMeshGroup('AwsAppMeshGroup', 'Aws App Mesh Group', 'an optional tech label') {
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

' loads the Item which embeds the element AwsAppMeshGroup
include('aws-20210131/Architecture/NetworkingContent/AwsAppMesh')

' renders the element
AwsAppMeshGroup('AwsAppMeshGroup', 'Aws App Mesh Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

