# AmazonVirtualPrivateCloud


```text
aws-q1-2024/Architecture/NetworkingContentDelivery/AmazonVirtualPrivateCloud
```

```text
include('aws-q1-2024/Architecture/NetworkingContentDelivery/AmazonVirtualPrivateCloud')
```



| Illustration | AmazonVirtualPrivateCloud | AmazonVirtualPrivateCloudCard | AmazonVirtualPrivateCloudGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q1-2024/Architecture/NetworkingContentDelivery/AmazonVirtualPrivateCloud.png) | ![illustration for AmazonVirtualPrivateCloud](../../../aws-q1-2024/Architecture/NetworkingContentDelivery/AmazonVirtualPrivateCloud.Local.png) | ![illustration for AmazonVirtualPrivateCloudCard](../../../aws-q1-2024/Architecture/NetworkingContentDelivery/AmazonVirtualPrivateCloudCard.Local.png) | ![illustration for AmazonVirtualPrivateCloudGroup](../../../aws-q1-2024/Architecture/NetworkingContentDelivery/AmazonVirtualPrivateCloudGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AmazonVirtualPrivateCloudXs>`
- `<$AmazonVirtualPrivateCloudSm>`
- `<$AmazonVirtualPrivateCloudMd>`
- `<$AmazonVirtualPrivateCloudLg>`





## AmazonVirtualPrivateCloud

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2024/bootstrap')

' loads the Item which embeds the element AmazonVirtualPrivateCloud
include('aws-q1-2024/Architecture/NetworkingContentDelivery/AmazonVirtualPrivateCloud')

' renders the element
AmazonVirtualPrivateCloud('AmazonVirtualPrivateCloud', 'Amazon Virtual Private Cloud', 'an optional tech label', 'an optional description')
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
include('aws-q1-2024/bootstrap')

' loads the Item which embeds the element AmazonVirtualPrivateCloud
include('aws-q1-2024/Architecture/NetworkingContentDelivery/AmazonVirtualPrivateCloud')

' renders the element
AmazonVirtualPrivateCloud('AmazonVirtualPrivateCloud', 'Amazon Virtual Private Cloud', 'an optional tech label', 'an optional description')
@enduml
```

## AmazonVirtualPrivateCloudCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2024/bootstrap')

' loads the Item which embeds the element AmazonVirtualPrivateCloudCard
include('aws-q1-2024/Architecture/NetworkingContentDelivery/AmazonVirtualPrivateCloud')

' renders the element
AmazonVirtualPrivateCloudCard('AmazonVirtualPrivateCloudCard', 'Amazon Virtual Private Cloud Card', 'an optional description')
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
include('aws-q1-2024/bootstrap')

' loads the Item which embeds the element AmazonVirtualPrivateCloudCard
include('aws-q1-2024/Architecture/NetworkingContentDelivery/AmazonVirtualPrivateCloud')

' renders the element
AmazonVirtualPrivateCloudCard('AmazonVirtualPrivateCloudCard', 'Amazon Virtual Private Cloud Card', 'an optional description')
@enduml
```

## AmazonVirtualPrivateCloudGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2024/bootstrap')

' loads the Item which embeds the element AmazonVirtualPrivateCloudGroup
include('aws-q1-2024/Architecture/NetworkingContentDelivery/AmazonVirtualPrivateCloud')

' renders the element
AmazonVirtualPrivateCloudGroup('AmazonVirtualPrivateCloudGroup', 'Amazon Virtual Private Cloud Group', 'an optional tech label') {
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
include('aws-q1-2024/bootstrap')

' loads the Item which embeds the element AmazonVirtualPrivateCloudGroup
include('aws-q1-2024/Architecture/NetworkingContentDelivery/AmazonVirtualPrivateCloud')

' renders the element
AmazonVirtualPrivateCloudGroup('AmazonVirtualPrivateCloudGroup', 'Amazon Virtual Private Cloud Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

