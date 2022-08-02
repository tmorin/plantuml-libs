# NetworkingContentDelivery


```text
aws-q1-2022/Category/NetworkingContentDelivery
```

```text
include('aws-q1-2022/Category/NetworkingContentDelivery')
```



| Illustration | NetworkingContentDelivery | NetworkingContentDeliveryCard | NetworkingContentDeliveryGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../aws-q1-2022/Category/NetworkingContentDelivery.png) | ![illustration for NetworkingContentDelivery](../../aws-q1-2022/Category/NetworkingContentDelivery.Local.png) | ![illustration for NetworkingContentDeliveryCard](../../aws-q1-2022/Category/NetworkingContentDeliveryCard.Local.png) | ![illustration for NetworkingContentDeliveryGroup](../../aws-q1-2022/Category/NetworkingContentDeliveryGroup.Local.png) |




## NetworkingContentDelivery

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2022/bootstrap')

' loads the Item which embeds the element NetworkingContentDelivery
include('aws-q1-2022/Category/NetworkingContentDelivery')

' renders the element
NetworkingContentDelivery('NetworkingContentDelivery', 'Networking Content Delivery', 'an optional tech label', 'an optional description')
@enduml
```

### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2022/bootstrap')

' loads the Item which embeds the element NetworkingContentDelivery
include('aws-q1-2022/Category/NetworkingContentDelivery')

' renders the element
NetworkingContentDelivery('NetworkingContentDelivery', 'Networking Content Delivery', 'an optional tech label', 'an optional description')
@enduml
```

## NetworkingContentDeliveryCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2022/bootstrap')

' loads the Item which embeds the element NetworkingContentDeliveryCard
include('aws-q1-2022/Category/NetworkingContentDelivery')

' renders the element
NetworkingContentDeliveryCard('NetworkingContentDeliveryCard', 'Networking Content Delivery Card', 'an optional description')
@enduml
```

### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2022/bootstrap')

' loads the Item which embeds the element NetworkingContentDeliveryCard
include('aws-q1-2022/Category/NetworkingContentDelivery')

' renders the element
NetworkingContentDeliveryCard('NetworkingContentDeliveryCard', 'Networking Content Delivery Card', 'an optional description')
@enduml
```

## NetworkingContentDeliveryGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2022/bootstrap')

' loads the Item which embeds the element NetworkingContentDeliveryGroup
include('aws-q1-2022/Category/NetworkingContentDelivery')

' renders the element
NetworkingContentDeliveryGroup('NetworkingContentDeliveryGroup', 'Networking Content Delivery Group', 'an optional tech label') {
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
!global $LIB_BASE_LOCATION="../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2022/bootstrap')

' loads the Item which embeds the element NetworkingContentDeliveryGroup
include('aws-q1-2022/Category/NetworkingContentDelivery')

' renders the element
NetworkingContentDeliveryGroup('NetworkingContentDeliveryGroup', 'Networking Content Delivery Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

