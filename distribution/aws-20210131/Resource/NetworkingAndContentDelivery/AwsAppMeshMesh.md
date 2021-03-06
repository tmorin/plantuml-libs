# AwsAppMeshMesh


```text
aws-20210131/Resource/NetworkingAndContentDelivery/AwsAppMeshMesh
```

```text
include('aws-20210131/Resource/NetworkingAndContentDelivery/AwsAppMeshMesh')
```



| Illustration | AwsAppMeshMesh | AwsAppMeshMeshCard | AwsAppMeshMeshGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-20210131/Resource/NetworkingAndContentDelivery/AwsAppMeshMesh.png) | ![illustration for AwsAppMeshMesh](../../../aws-20210131/Resource/NetworkingAndContentDelivery/AwsAppMeshMesh.Local.png) | ![illustration for AwsAppMeshMeshCard](../../../aws-20210131/Resource/NetworkingAndContentDelivery/AwsAppMeshMeshCard.Local.png) | ![illustration for AwsAppMeshMeshGroup](../../../aws-20210131/Resource/NetworkingAndContentDelivery/AwsAppMeshMeshGroup.Local.png) |




## AwsAppMeshMesh

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AwsAppMeshMesh
include('aws-20210131/Resource/NetworkingAndContentDelivery/AwsAppMeshMesh')

' renders the element
AwsAppMeshMesh('AwsAppMeshMesh', 'Aws App Mesh Mesh', 'an optional tech label')
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

' loads the Item which embeds the element AwsAppMeshMesh
include('aws-20210131/Resource/NetworkingAndContentDelivery/AwsAppMeshMesh')

' renders the element
AwsAppMeshMesh('AwsAppMeshMesh', 'Aws App Mesh Mesh', 'an optional tech label')
@enduml
```

## AwsAppMeshMeshCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AwsAppMeshMeshCard
include('aws-20210131/Resource/NetworkingAndContentDelivery/AwsAppMeshMesh')

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
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AwsAppMeshMeshCard
include('aws-20210131/Resource/NetworkingAndContentDelivery/AwsAppMeshMesh')

' renders the element
AwsAppMeshMeshCard('AwsAppMeshMeshCard', 'Aws App Mesh Mesh Card', 'an optional description')
@enduml
```

## AwsAppMeshMeshGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AwsAppMeshMeshGroup
include('aws-20210131/Resource/NetworkingAndContentDelivery/AwsAppMeshMesh')

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
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AwsAppMeshMeshGroup
include('aws-20210131/Resource/NetworkingAndContentDelivery/AwsAppMeshMesh')

' renders the element
AwsAppMeshMeshGroup('AwsAppMeshMeshGroup', 'Aws App Mesh Mesh Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

