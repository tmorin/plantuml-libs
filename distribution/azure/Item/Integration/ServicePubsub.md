# ServicePubsub


```text
azure/Item/Integration/ServicePubsub
```

```text
include('azure/Item/Integration/ServicePubsub')
```



| Illustration | ServicePubsub | ServicePubsubCard | ServicePubsubGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure/Item/Integration/ServicePubsub.png) | ![illustration for ServicePubsub](../../../azure/Item/Integration/ServicePubsub.Local.png) | ![illustration for ServicePubsubCard](../../../azure/Item/Integration/ServicePubsubCard.Local.png) | ![illustration for ServicePubsubGroup](../../../azure/Item/Integration/ServicePubsubGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ServicePubsubXs>`
- `<$ServicePubsubSm>`
- `<$ServicePubsubMd>`
- `<$ServicePubsubLg>`





## ServicePubsub

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure/bootstrap')

' loads the Item which embeds the element ServicePubsub
include('azure/Item/Integration/ServicePubsub')

' renders the element
ServicePubsub('ServicePubsub', 'Service Pubsub', 'an optional tech label', 'an optional description')
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
include('azure/bootstrap')

' loads the Item which embeds the element ServicePubsub
include('azure/Item/Integration/ServicePubsub')

' renders the element
ServicePubsub('ServicePubsub', 'Service Pubsub', 'an optional tech label', 'an optional description')
@enduml
```

## ServicePubsubCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure/bootstrap')

' loads the Item which embeds the element ServicePubsubCard
include('azure/Item/Integration/ServicePubsub')

' renders the element
ServicePubsubCard('ServicePubsubCard', 'Service Pubsub Card', 'an optional description')
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
include('azure/bootstrap')

' loads the Item which embeds the element ServicePubsubCard
include('azure/Item/Integration/ServicePubsub')

' renders the element
ServicePubsubCard('ServicePubsubCard', 'Service Pubsub Card', 'an optional description')
@enduml
```

## ServicePubsubGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure/bootstrap')

' loads the Item which embeds the element ServicePubsubGroup
include('azure/Item/Integration/ServicePubsub')

' renders the element
ServicePubsubGroup('ServicePubsubGroup', 'Service Pubsub Group', 'an optional tech label') {
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
include('azure/bootstrap')

' loads the Item which embeds the element ServicePubsubGroup
include('azure/Item/Integration/ServicePubsub')

' renders the element
ServicePubsubGroup('ServicePubsubGroup', 'Service Pubsub Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

