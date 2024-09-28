# AwsAppMeshVirtualNode


```text
aws-q2-2024/Resource/NetworkingContentDelivery/AwsAppMeshVirtualNode
```

```text
include('aws-q2-2024/Resource/NetworkingContentDelivery/AwsAppMeshVirtualNode')
```



| Illustration | AwsAppMeshVirtualNode | AwsAppMeshVirtualNodeCard | AwsAppMeshVirtualNodeGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q2-2024/Resource/NetworkingContentDelivery/AwsAppMeshVirtualNode.png) | ![illustration for AwsAppMeshVirtualNode](../../../aws-q2-2024/Resource/NetworkingContentDelivery/AwsAppMeshVirtualNode.Local.png) | ![illustration for AwsAppMeshVirtualNodeCard](../../../aws-q2-2024/Resource/NetworkingContentDelivery/AwsAppMeshVirtualNodeCard.Local.png) | ![illustration for AwsAppMeshVirtualNodeGroup](../../../aws-q2-2024/Resource/NetworkingContentDelivery/AwsAppMeshVirtualNodeGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AwsAppMeshVirtualNodeXs>`
- `<$AwsAppMeshVirtualNodeSm>`
- `<$AwsAppMeshVirtualNodeMd>`
- `<$AwsAppMeshVirtualNodeLg>`





## AwsAppMeshVirtualNode

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2024/bootstrap')

' loads the Item which embeds the element AwsAppMeshVirtualNode
include('aws-q2-2024/Resource/NetworkingContentDelivery/AwsAppMeshVirtualNode')

' renders the element
AwsAppMeshVirtualNode('AwsAppMeshVirtualNode', 'Aws App Mesh Virtual Node', 'an optional tech label', 'an optional description')
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
include('aws-q2-2024/bootstrap')

' loads the Item which embeds the element AwsAppMeshVirtualNode
include('aws-q2-2024/Resource/NetworkingContentDelivery/AwsAppMeshVirtualNode')

' renders the element
AwsAppMeshVirtualNode('AwsAppMeshVirtualNode', 'Aws App Mesh Virtual Node', 'an optional tech label', 'an optional description')
@enduml
```

## AwsAppMeshVirtualNodeCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2024/bootstrap')

' loads the Item which embeds the element AwsAppMeshVirtualNodeCard
include('aws-q2-2024/Resource/NetworkingContentDelivery/AwsAppMeshVirtualNode')

' renders the element
AwsAppMeshVirtualNodeCard('AwsAppMeshVirtualNodeCard', 'Aws App Mesh Virtual Node Card', 'an optional description')
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
include('aws-q2-2024/bootstrap')

' loads the Item which embeds the element AwsAppMeshVirtualNodeCard
include('aws-q2-2024/Resource/NetworkingContentDelivery/AwsAppMeshVirtualNode')

' renders the element
AwsAppMeshVirtualNodeCard('AwsAppMeshVirtualNodeCard', 'Aws App Mesh Virtual Node Card', 'an optional description')
@enduml
```

## AwsAppMeshVirtualNodeGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2024/bootstrap')

' loads the Item which embeds the element AwsAppMeshVirtualNodeGroup
include('aws-q2-2024/Resource/NetworkingContentDelivery/AwsAppMeshVirtualNode')

' renders the element
AwsAppMeshVirtualNodeGroup('AwsAppMeshVirtualNodeGroup', 'Aws App Mesh Virtual Node Group', 'an optional tech label') {
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
include('aws-q2-2024/bootstrap')

' loads the Item which embeds the element AwsAppMeshVirtualNodeGroup
include('aws-q2-2024/Resource/NetworkingContentDelivery/AwsAppMeshVirtualNode')

' renders the element
AwsAppMeshVirtualNodeGroup('AwsAppMeshVirtualNodeGroup', 'Aws App Mesh Virtual Node Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

