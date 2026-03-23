# ServiceOpenSupplyChainPlatform


```text
azure/Item/Other/ServiceOpenSupplyChainPlatform
```

```text
include('azure/Item/Other/ServiceOpenSupplyChainPlatform')
```



| Illustration | ServiceOpenSupplyChainPlatform | ServiceOpenSupplyChainPlatformCard | ServiceOpenSupplyChainPlatformGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure/Item/Other/ServiceOpenSupplyChainPlatform.png) | ![illustration for ServiceOpenSupplyChainPlatform](../../../azure/Item/Other/ServiceOpenSupplyChainPlatform.Local.png) | ![illustration for ServiceOpenSupplyChainPlatformCard](../../../azure/Item/Other/ServiceOpenSupplyChainPlatformCard.Local.png) | ![illustration for ServiceOpenSupplyChainPlatformGroup](../../../azure/Item/Other/ServiceOpenSupplyChainPlatformGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ServiceOpenSupplyChainPlatformXs>`
- `<$ServiceOpenSupplyChainPlatformSm>`
- `<$ServiceOpenSupplyChainPlatformMd>`
- `<$ServiceOpenSupplyChainPlatformLg>`





## ServiceOpenSupplyChainPlatform

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure/bootstrap')

' loads the Item which embeds the element ServiceOpenSupplyChainPlatform
include('azure/Item/Other/ServiceOpenSupplyChainPlatform')

' renders the element
ServiceOpenSupplyChainPlatform('ServiceOpenSupplyChainPlatform', 'Service Open Supply Chain Platform', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ServiceOpenSupplyChainPlatform
include('azure/Item/Other/ServiceOpenSupplyChainPlatform')

' renders the element
ServiceOpenSupplyChainPlatform('ServiceOpenSupplyChainPlatform', 'Service Open Supply Chain Platform', 'an optional tech label', 'an optional description')
@enduml
```

## ServiceOpenSupplyChainPlatformCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure/bootstrap')

' loads the Item which embeds the element ServiceOpenSupplyChainPlatformCard
include('azure/Item/Other/ServiceOpenSupplyChainPlatform')

' renders the element
ServiceOpenSupplyChainPlatformCard('ServiceOpenSupplyChainPlatformCard', 'Service Open Supply Chain Platform Card', 'an optional description')
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

' loads the Item which embeds the element ServiceOpenSupplyChainPlatformCard
include('azure/Item/Other/ServiceOpenSupplyChainPlatform')

' renders the element
ServiceOpenSupplyChainPlatformCard('ServiceOpenSupplyChainPlatformCard', 'Service Open Supply Chain Platform Card', 'an optional description')
@enduml
```

## ServiceOpenSupplyChainPlatformGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure/bootstrap')

' loads the Item which embeds the element ServiceOpenSupplyChainPlatformGroup
include('azure/Item/Other/ServiceOpenSupplyChainPlatform')

' renders the element
ServiceOpenSupplyChainPlatformGroup('ServiceOpenSupplyChainPlatformGroup', 'Service Open Supply Chain Platform Group', 'an optional tech label') {
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

' loads the Item which embeds the element ServiceOpenSupplyChainPlatformGroup
include('azure/Item/Other/ServiceOpenSupplyChainPlatform')

' renders the element
ServiceOpenSupplyChainPlatformGroup('ServiceOpenSupplyChainPlatformGroup', 'Service Open Supply Chain Platform Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

