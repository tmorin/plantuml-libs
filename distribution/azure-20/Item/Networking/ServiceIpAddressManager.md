# ServiceIpAddressManager


```text
azure-20/Item/Networking/ServiceIpAddressManager
```

```text
include('azure-20/Item/Networking/ServiceIpAddressManager')
```



| Illustration | ServiceIpAddressManager | ServiceIpAddressManagerCard | ServiceIpAddressManagerGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure-20/Item/Networking/ServiceIpAddressManager.png) | ![illustration for ServiceIpAddressManager](../../../azure-20/Item/Networking/ServiceIpAddressManager.Local.png) | ![illustration for ServiceIpAddressManagerCard](../../../azure-20/Item/Networking/ServiceIpAddressManagerCard.Local.png) | ![illustration for ServiceIpAddressManagerGroup](../../../azure-20/Item/Networking/ServiceIpAddressManagerGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ServiceIpAddressManagerXs>`
- `<$ServiceIpAddressManagerSm>`
- `<$ServiceIpAddressManagerMd>`
- `<$ServiceIpAddressManagerLg>`





## ServiceIpAddressManager

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-20/bootstrap')

' loads the Item which embeds the element ServiceIpAddressManager
include('azure-20/Item/Networking/ServiceIpAddressManager')

' renders the element
ServiceIpAddressManager('ServiceIpAddressManager', 'Service Ip Address Manager', 'an optional tech label', 'an optional description')
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
include('azure-20/bootstrap')

' loads the Item which embeds the element ServiceIpAddressManager
include('azure-20/Item/Networking/ServiceIpAddressManager')

' renders the element
ServiceIpAddressManager('ServiceIpAddressManager', 'Service Ip Address Manager', 'an optional tech label', 'an optional description')
@enduml
```

## ServiceIpAddressManagerCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-20/bootstrap')

' loads the Item which embeds the element ServiceIpAddressManagerCard
include('azure-20/Item/Networking/ServiceIpAddressManager')

' renders the element
ServiceIpAddressManagerCard('ServiceIpAddressManagerCard', 'Service Ip Address Manager Card', 'an optional description')
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
include('azure-20/bootstrap')

' loads the Item which embeds the element ServiceIpAddressManagerCard
include('azure-20/Item/Networking/ServiceIpAddressManager')

' renders the element
ServiceIpAddressManagerCard('ServiceIpAddressManagerCard', 'Service Ip Address Manager Card', 'an optional description')
@enduml
```

## ServiceIpAddressManagerGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-20/bootstrap')

' loads the Item which embeds the element ServiceIpAddressManagerGroup
include('azure-20/Item/Networking/ServiceIpAddressManager')

' renders the element
ServiceIpAddressManagerGroup('ServiceIpAddressManagerGroup', 'Service Ip Address Manager Group', 'an optional tech label') {
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
include('azure-20/bootstrap')

' loads the Item which embeds the element ServiceIpAddressManagerGroup
include('azure-20/Item/Networking/ServiceIpAddressManager')

' renders the element
ServiceIpAddressManagerGroup('ServiceIpAddressManagerGroup', 'Service Ip Address Manager Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

