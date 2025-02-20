# AwsAppMeshMesh


```text
aws-q1-2025/Resource/NetworkingContentDelivery/AwsAppMeshMesh
```

```text
include('aws-q1-2025/Resource/NetworkingContentDelivery/AwsAppMeshMesh')
```



| Illustration | AwsAppMeshMesh | AwsAppMeshMeshCard | AwsAppMeshMeshGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q1-2025/Resource/NetworkingContentDelivery/AwsAppMeshMesh.png) | ![illustration for AwsAppMeshMesh](../../../aws-q1-2025/Resource/NetworkingContentDelivery/AwsAppMeshMesh.Local.png) | ![illustration for AwsAppMeshMeshCard](../../../aws-q1-2025/Resource/NetworkingContentDelivery/AwsAppMeshMeshCard.Local.png) | ![illustration for AwsAppMeshMeshGroup](../../../aws-q1-2025/Resource/NetworkingContentDelivery/AwsAppMeshMeshGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AwsAppMeshMeshXs>`
- `<$AwsAppMeshMeshSm>`
- `<$AwsAppMeshMeshMd>`
- `<$AwsAppMeshMeshLg>`





## AwsAppMeshMesh

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2025/bootstrap')

' loads the Item which embeds the element AwsAppMeshMesh
include('aws-q1-2025/Resource/NetworkingContentDelivery/AwsAppMeshMesh')

' renders the element
AwsAppMeshMesh('AwsAppMeshMesh', 'Aws App Mesh Mesh', 'an optional tech label', 'an optional description')
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
include('aws-q1-2025/bootstrap')

' loads the Item which embeds the element AwsAppMeshMesh
include('aws-q1-2025/Resource/NetworkingContentDelivery/AwsAppMeshMesh')

' renders the element
AwsAppMeshMesh('AwsAppMeshMesh', 'Aws App Mesh Mesh', 'an optional tech label', 'an optional description')
@enduml
```

## AwsAppMeshMeshCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2025/bootstrap')

' loads the Item which embeds the element AwsAppMeshMeshCard
include('aws-q1-2025/Resource/NetworkingContentDelivery/AwsAppMeshMesh')

' renders the element
AwsAppMeshMeshCard('AwsAppMeshMeshCard', 'Aws App Mesh Mesh Card', 'an optional description')
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
include('aws-q1-2025/bootstrap')

' loads the Item which embeds the element AwsAppMeshMeshCard
include('aws-q1-2025/Resource/NetworkingContentDelivery/AwsAppMeshMesh')

' renders the element
AwsAppMeshMeshCard('AwsAppMeshMeshCard', 'Aws App Mesh Mesh Card', 'an optional description')
@enduml
```

## AwsAppMeshMeshGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2025/bootstrap')

' loads the Item which embeds the element AwsAppMeshMeshGroup
include('aws-q1-2025/Resource/NetworkingContentDelivery/AwsAppMeshMesh')

' renders the element
AwsAppMeshMeshGroup('AwsAppMeshMeshGroup', 'Aws App Mesh Mesh Group', 'an optional tech label') {
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
include('aws-q1-2025/bootstrap')

' loads the Item which embeds the element AwsAppMeshMeshGroup
include('aws-q1-2025/Resource/NetworkingContentDelivery/AwsAppMeshMesh')

' renders the element
AwsAppMeshMeshGroup('AwsAppMeshMeshGroup', 'Aws App Mesh Mesh Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

