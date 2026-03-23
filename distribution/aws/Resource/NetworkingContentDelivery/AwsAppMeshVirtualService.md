# AwsAppMeshVirtualService


```text
aws/Resource/NetworkingContentDelivery/AwsAppMeshVirtualService
```

```text
include('aws/Resource/NetworkingContentDelivery/AwsAppMeshVirtualService')
```



| Illustration | AwsAppMeshVirtualService | AwsAppMeshVirtualServiceCard | AwsAppMeshVirtualServiceGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws/Resource/NetworkingContentDelivery/AwsAppMeshVirtualService.png) | ![illustration for AwsAppMeshVirtualService](../../../aws/Resource/NetworkingContentDelivery/AwsAppMeshVirtualService.Local.png) | ![illustration for AwsAppMeshVirtualServiceCard](../../../aws/Resource/NetworkingContentDelivery/AwsAppMeshVirtualServiceCard.Local.png) | ![illustration for AwsAppMeshVirtualServiceGroup](../../../aws/Resource/NetworkingContentDelivery/AwsAppMeshVirtualServiceGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AwsAppMeshVirtualServiceXs>`
- `<$AwsAppMeshVirtualServiceSm>`
- `<$AwsAppMeshVirtualServiceMd>`
- `<$AwsAppMeshVirtualServiceLg>`





## AwsAppMeshVirtualService

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws/bootstrap')

' loads the Item which embeds the element AwsAppMeshVirtualService
include('aws/Resource/NetworkingContentDelivery/AwsAppMeshVirtualService')

' renders the element
AwsAppMeshVirtualService('AwsAppMeshVirtualService', 'Aws App Mesh Virtual Service', 'an optional tech label', 'an optional description')
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
include('aws/bootstrap')

' loads the Item which embeds the element AwsAppMeshVirtualService
include('aws/Resource/NetworkingContentDelivery/AwsAppMeshVirtualService')

' renders the element
AwsAppMeshVirtualService('AwsAppMeshVirtualService', 'Aws App Mesh Virtual Service', 'an optional tech label', 'an optional description')
@enduml
```

## AwsAppMeshVirtualServiceCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws/bootstrap')

' loads the Item which embeds the element AwsAppMeshVirtualServiceCard
include('aws/Resource/NetworkingContentDelivery/AwsAppMeshVirtualService')

' renders the element
AwsAppMeshVirtualServiceCard('AwsAppMeshVirtualServiceCard', 'Aws App Mesh Virtual Service Card', 'an optional description')
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
include('aws/bootstrap')

' loads the Item which embeds the element AwsAppMeshVirtualServiceCard
include('aws/Resource/NetworkingContentDelivery/AwsAppMeshVirtualService')

' renders the element
AwsAppMeshVirtualServiceCard('AwsAppMeshVirtualServiceCard', 'Aws App Mesh Virtual Service Card', 'an optional description')
@enduml
```

## AwsAppMeshVirtualServiceGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws/bootstrap')

' loads the Item which embeds the element AwsAppMeshVirtualServiceGroup
include('aws/Resource/NetworkingContentDelivery/AwsAppMeshVirtualService')

' renders the element
AwsAppMeshVirtualServiceGroup('AwsAppMeshVirtualServiceGroup', 'Aws App Mesh Virtual Service Group', 'an optional tech label') {
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
include('aws/bootstrap')

' loads the Item which embeds the element AwsAppMeshVirtualServiceGroup
include('aws/Resource/NetworkingContentDelivery/AwsAppMeshVirtualService')

' renders the element
AwsAppMeshVirtualServiceGroup('AwsAppMeshVirtualServiceGroup', 'Aws App Mesh Virtual Service Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

