# ServiceAtmMultistack


```text
azure/Item/Networking/ServiceAtmMultistack
```

```text
include('azure/Item/Networking/ServiceAtmMultistack')
```



| Illustration | ServiceAtmMultistack | ServiceAtmMultistackCard | ServiceAtmMultistackGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure/Item/Networking/ServiceAtmMultistack.png) | ![illustration for ServiceAtmMultistack](../../../azure/Item/Networking/ServiceAtmMultistack.Local.png) | ![illustration for ServiceAtmMultistackCard](../../../azure/Item/Networking/ServiceAtmMultistackCard.Local.png) | ![illustration for ServiceAtmMultistackGroup](../../../azure/Item/Networking/ServiceAtmMultistackGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ServiceAtmMultistackXs>`
- `<$ServiceAtmMultistackSm>`
- `<$ServiceAtmMultistackMd>`
- `<$ServiceAtmMultistackLg>`





## ServiceAtmMultistack

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure/bootstrap')

' loads the Item which embeds the element ServiceAtmMultistack
include('azure/Item/Networking/ServiceAtmMultistack')

' renders the element
ServiceAtmMultistack('ServiceAtmMultistack', 'Service Atm Multistack', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ServiceAtmMultistack
include('azure/Item/Networking/ServiceAtmMultistack')

' renders the element
ServiceAtmMultistack('ServiceAtmMultistack', 'Service Atm Multistack', 'an optional tech label', 'an optional description')
@enduml
```

## ServiceAtmMultistackCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure/bootstrap')

' loads the Item which embeds the element ServiceAtmMultistackCard
include('azure/Item/Networking/ServiceAtmMultistack')

' renders the element
ServiceAtmMultistackCard('ServiceAtmMultistackCard', 'Service Atm Multistack Card', 'an optional description')
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

' loads the Item which embeds the element ServiceAtmMultistackCard
include('azure/Item/Networking/ServiceAtmMultistack')

' renders the element
ServiceAtmMultistackCard('ServiceAtmMultistackCard', 'Service Atm Multistack Card', 'an optional description')
@enduml
```

## ServiceAtmMultistackGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure/bootstrap')

' loads the Item which embeds the element ServiceAtmMultistackGroup
include('azure/Item/Networking/ServiceAtmMultistack')

' renders the element
ServiceAtmMultistackGroup('ServiceAtmMultistackGroup', 'Service Atm Multistack Group', 'an optional tech label') {
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

' loads the Item which embeds the element ServiceAtmMultistackGroup
include('azure/Item/Networking/ServiceAtmMultistack')

' renders the element
ServiceAtmMultistackGroup('ServiceAtmMultistackGroup', 'Service Atm Multistack Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

