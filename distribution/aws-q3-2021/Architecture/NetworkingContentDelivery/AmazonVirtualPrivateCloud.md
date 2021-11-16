# AmazonVirtualPrivateCloud


```text
aws-q3-2021/Architecture/NetworkingContentDelivery/AmazonVirtualPrivateCloud
```

```text
include('aws-q3-2021/Architecture/NetworkingContentDelivery/AmazonVirtualPrivateCloud')
```



| Illustration | AmazonVirtualPrivateCloud | AmazonVirtualPrivateCloudCard | AmazonVirtualPrivateCloudGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q3-2021/Architecture/NetworkingContentDelivery/AmazonVirtualPrivateCloud.png) | ![illustration for AmazonVirtualPrivateCloud](../../../aws-q3-2021/Architecture/NetworkingContentDelivery/AmazonVirtualPrivateCloud.Local.png) | ![illustration for AmazonVirtualPrivateCloudCard](../../../aws-q3-2021/Architecture/NetworkingContentDelivery/AmazonVirtualPrivateCloudCard.Local.png) | ![illustration for AmazonVirtualPrivateCloudGroup](../../../aws-q3-2021/Architecture/NetworkingContentDelivery/AmazonVirtualPrivateCloudGroup.Local.png) |




## AmazonVirtualPrivateCloud

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element AmazonVirtualPrivateCloud
include('aws-q3-2021/Architecture/NetworkingContentDelivery/AmazonVirtualPrivateCloud')

' renders the element
AmazonVirtualPrivateCloud('AmazonVirtualPrivateCloud', 'Amazon Virtual Private Cloud', 'an optional tech label')
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
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element AmazonVirtualPrivateCloud
include('aws-q3-2021/Architecture/NetworkingContentDelivery/AmazonVirtualPrivateCloud')

' renders the element
AmazonVirtualPrivateCloud('AmazonVirtualPrivateCloud', 'Amazon Virtual Private Cloud', 'an optional tech label')
@enduml
```

## AmazonVirtualPrivateCloudCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element AmazonVirtualPrivateCloudCard
include('aws-q3-2021/Architecture/NetworkingContentDelivery/AmazonVirtualPrivateCloud')

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
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element AmazonVirtualPrivateCloudCard
include('aws-q3-2021/Architecture/NetworkingContentDelivery/AmazonVirtualPrivateCloud')

' renders the element
AmazonVirtualPrivateCloudCard('AmazonVirtualPrivateCloudCard', 'Amazon Virtual Private Cloud Card', 'an optional description')
@enduml
```

## AmazonVirtualPrivateCloudGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element AmazonVirtualPrivateCloudGroup
include('aws-q3-2021/Architecture/NetworkingContentDelivery/AmazonVirtualPrivateCloud')

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
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element AmazonVirtualPrivateCloudGroup
include('aws-q3-2021/Architecture/NetworkingContentDelivery/AmazonVirtualPrivateCloud')

' renders the element
AmazonVirtualPrivateCloudGroup('AmazonVirtualPrivateCloudGroup', 'Amazon Virtual Private Cloud Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

