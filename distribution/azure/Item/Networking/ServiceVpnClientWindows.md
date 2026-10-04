# ServiceVpnClientWindows


```text
azure/Item/Networking/ServiceVpnClientWindows
```

```text
include('azure/Item/Networking/ServiceVpnClientWindows')
```



| Illustration | ServiceVpnClientWindows | ServiceVpnClientWindowsCard | ServiceVpnClientWindowsGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure/Item/Networking/ServiceVpnClientWindows.png) | ![illustration for ServiceVpnClientWindows](../../../azure/Item/Networking/ServiceVpnClientWindows.Local.png) | ![illustration for ServiceVpnClientWindowsCard](../../../azure/Item/Networking/ServiceVpnClientWindowsCard.Local.png) | ![illustration for ServiceVpnClientWindowsGroup](../../../azure/Item/Networking/ServiceVpnClientWindowsGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ServiceVpnClientWindowsXs>`
- `<$ServiceVpnClientWindowsSm>`
- `<$ServiceVpnClientWindowsMd>`
- `<$ServiceVpnClientWindowsLg>`





## ServiceVpnClientWindows

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure/bootstrap')

' loads the Item which embeds the element ServiceVpnClientWindows
include('azure/Item/Networking/ServiceVpnClientWindows')

' renders the element
ServiceVpnClientWindows('ServiceVpnClientWindows', 'Service Vpn Client Windows', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ServiceVpnClientWindows
include('azure/Item/Networking/ServiceVpnClientWindows')

' renders the element
ServiceVpnClientWindows('ServiceVpnClientWindows', 'Service Vpn Client Windows', 'an optional tech label', 'an optional description')
@enduml
```

## ServiceVpnClientWindowsCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure/bootstrap')

' loads the Item which embeds the element ServiceVpnClientWindowsCard
include('azure/Item/Networking/ServiceVpnClientWindows')

' renders the element
ServiceVpnClientWindowsCard('ServiceVpnClientWindowsCard', 'Service Vpn Client Windows Card', 'an optional description')
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

' loads the Item which embeds the element ServiceVpnClientWindowsCard
include('azure/Item/Networking/ServiceVpnClientWindows')

' renders the element
ServiceVpnClientWindowsCard('ServiceVpnClientWindowsCard', 'Service Vpn Client Windows Card', 'an optional description')
@enduml
```

## ServiceVpnClientWindowsGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure/bootstrap')

' loads the Item which embeds the element ServiceVpnClientWindowsGroup
include('azure/Item/Networking/ServiceVpnClientWindows')

' renders the element
ServiceVpnClientWindowsGroup('ServiceVpnClientWindowsGroup', 'Service Vpn Client Windows Group', 'an optional tech label') {
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

' loads the Item which embeds the element ServiceVpnClientWindowsGroup
include('azure/Item/Networking/ServiceVpnClientWindows')

' renders the element
ServiceVpnClientWindowsGroup('ServiceVpnClientWindowsGroup', 'Service Vpn Client Windows Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

