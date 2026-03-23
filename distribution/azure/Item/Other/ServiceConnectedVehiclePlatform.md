# ServiceConnectedVehiclePlatform


```text
azure/Item/Other/ServiceConnectedVehiclePlatform
```

```text
include('azure/Item/Other/ServiceConnectedVehiclePlatform')
```



| Illustration | ServiceConnectedVehiclePlatform | ServiceConnectedVehiclePlatformCard | ServiceConnectedVehiclePlatformGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure/Item/Other/ServiceConnectedVehiclePlatform.png) | ![illustration for ServiceConnectedVehiclePlatform](../../../azure/Item/Other/ServiceConnectedVehiclePlatform.Local.png) | ![illustration for ServiceConnectedVehiclePlatformCard](../../../azure/Item/Other/ServiceConnectedVehiclePlatformCard.Local.png) | ![illustration for ServiceConnectedVehiclePlatformGroup](../../../azure/Item/Other/ServiceConnectedVehiclePlatformGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ServiceConnectedVehiclePlatformXs>`
- `<$ServiceConnectedVehiclePlatformSm>`
- `<$ServiceConnectedVehiclePlatformMd>`
- `<$ServiceConnectedVehiclePlatformLg>`





## ServiceConnectedVehiclePlatform

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure/bootstrap')

' loads the Item which embeds the element ServiceConnectedVehiclePlatform
include('azure/Item/Other/ServiceConnectedVehiclePlatform')

' renders the element
ServiceConnectedVehiclePlatform('ServiceConnectedVehiclePlatform', 'Service Connected Vehicle Platform', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ServiceConnectedVehiclePlatform
include('azure/Item/Other/ServiceConnectedVehiclePlatform')

' renders the element
ServiceConnectedVehiclePlatform('ServiceConnectedVehiclePlatform', 'Service Connected Vehicle Platform', 'an optional tech label', 'an optional description')
@enduml
```

## ServiceConnectedVehiclePlatformCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure/bootstrap')

' loads the Item which embeds the element ServiceConnectedVehiclePlatformCard
include('azure/Item/Other/ServiceConnectedVehiclePlatform')

' renders the element
ServiceConnectedVehiclePlatformCard('ServiceConnectedVehiclePlatformCard', 'Service Connected Vehicle Platform Card', 'an optional description')
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

' loads the Item which embeds the element ServiceConnectedVehiclePlatformCard
include('azure/Item/Other/ServiceConnectedVehiclePlatform')

' renders the element
ServiceConnectedVehiclePlatformCard('ServiceConnectedVehiclePlatformCard', 'Service Connected Vehicle Platform Card', 'an optional description')
@enduml
```

## ServiceConnectedVehiclePlatformGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure/bootstrap')

' loads the Item which embeds the element ServiceConnectedVehiclePlatformGroup
include('azure/Item/Other/ServiceConnectedVehiclePlatform')

' renders the element
ServiceConnectedVehiclePlatformGroup('ServiceConnectedVehiclePlatformGroup', 'Service Connected Vehicle Platform Group', 'an optional tech label') {
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

' loads the Item which embeds the element ServiceConnectedVehiclePlatformGroup
include('azure/Item/Other/ServiceConnectedVehiclePlatform')

' renders the element
ServiceConnectedVehiclePlatformGroup('ServiceConnectedVehiclePlatformGroup', 'Service Connected Vehicle Platform Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

