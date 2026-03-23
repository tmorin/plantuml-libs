# ServiceVirtualWaNs


```text
azure/Item/Networking/ServiceVirtualWaNs
```

```text
include('azure/Item/Networking/ServiceVirtualWaNs')
```



| Illustration | ServiceVirtualWaNs | ServiceVirtualWaNsCard | ServiceVirtualWaNsGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure/Item/Networking/ServiceVirtualWaNs.png) | ![illustration for ServiceVirtualWaNs](../../../azure/Item/Networking/ServiceVirtualWaNs.Local.png) | ![illustration for ServiceVirtualWaNsCard](../../../azure/Item/Networking/ServiceVirtualWaNsCard.Local.png) | ![illustration for ServiceVirtualWaNsGroup](../../../azure/Item/Networking/ServiceVirtualWaNsGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ServiceVirtualWaNsXs>`
- `<$ServiceVirtualWaNsSm>`
- `<$ServiceVirtualWaNsMd>`
- `<$ServiceVirtualWaNsLg>`





## ServiceVirtualWaNs

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure/bootstrap')

' loads the Item which embeds the element ServiceVirtualWaNs
include('azure/Item/Networking/ServiceVirtualWaNs')

' renders the element
ServiceVirtualWaNs('ServiceVirtualWaNs', 'Service Virtual Wa Ns', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ServiceVirtualWaNs
include('azure/Item/Networking/ServiceVirtualWaNs')

' renders the element
ServiceVirtualWaNs('ServiceVirtualWaNs', 'Service Virtual Wa Ns', 'an optional tech label', 'an optional description')
@enduml
```

## ServiceVirtualWaNsCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure/bootstrap')

' loads the Item which embeds the element ServiceVirtualWaNsCard
include('azure/Item/Networking/ServiceVirtualWaNs')

' renders the element
ServiceVirtualWaNsCard('ServiceVirtualWaNsCard', 'Service Virtual Wa Ns Card', 'an optional description')
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

' loads the Item which embeds the element ServiceVirtualWaNsCard
include('azure/Item/Networking/ServiceVirtualWaNs')

' renders the element
ServiceVirtualWaNsCard('ServiceVirtualWaNsCard', 'Service Virtual Wa Ns Card', 'an optional description')
@enduml
```

## ServiceVirtualWaNsGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure/bootstrap')

' loads the Item which embeds the element ServiceVirtualWaNsGroup
include('azure/Item/Networking/ServiceVirtualWaNs')

' renders the element
ServiceVirtualWaNsGroup('ServiceVirtualWaNsGroup', 'Service Virtual Wa Ns Group', 'an optional tech label') {
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

' loads the Item which embeds the element ServiceVirtualWaNsGroup
include('azure/Item/Networking/ServiceVirtualWaNs')

' renders the element
ServiceVirtualWaNsGroup('ServiceVirtualWaNsGroup', 'Service Virtual Wa Ns Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

