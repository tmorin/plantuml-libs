# ServiceAzurite


```text
azure/Item/Other/ServiceAzurite
```

```text
include('azure/Item/Other/ServiceAzurite')
```



| Illustration | ServiceAzurite | ServiceAzuriteCard | ServiceAzuriteGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure/Item/Other/ServiceAzurite.png) | ![illustration for ServiceAzurite](../../../azure/Item/Other/ServiceAzurite.Local.png) | ![illustration for ServiceAzuriteCard](../../../azure/Item/Other/ServiceAzuriteCard.Local.png) | ![illustration for ServiceAzuriteGroup](../../../azure/Item/Other/ServiceAzuriteGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ServiceAzuriteXs>`
- `<$ServiceAzuriteSm>`
- `<$ServiceAzuriteMd>`
- `<$ServiceAzuriteLg>`





## ServiceAzurite

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure/bootstrap')

' loads the Item which embeds the element ServiceAzurite
include('azure/Item/Other/ServiceAzurite')

' renders the element
ServiceAzurite('ServiceAzurite', 'Service Azurite', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ServiceAzurite
include('azure/Item/Other/ServiceAzurite')

' renders the element
ServiceAzurite('ServiceAzurite', 'Service Azurite', 'an optional tech label', 'an optional description')
@enduml
```

## ServiceAzuriteCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure/bootstrap')

' loads the Item which embeds the element ServiceAzuriteCard
include('azure/Item/Other/ServiceAzurite')

' renders the element
ServiceAzuriteCard('ServiceAzuriteCard', 'Service Azurite Card', 'an optional description')
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

' loads the Item which embeds the element ServiceAzuriteCard
include('azure/Item/Other/ServiceAzurite')

' renders the element
ServiceAzuriteCard('ServiceAzuriteCard', 'Service Azurite Card', 'an optional description')
@enduml
```

## ServiceAzuriteGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure/bootstrap')

' loads the Item which embeds the element ServiceAzuriteGroup
include('azure/Item/Other/ServiceAzurite')

' renders the element
ServiceAzuriteGroup('ServiceAzuriteGroup', 'Service Azurite Group', 'an optional tech label') {
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

' loads the Item which embeds the element ServiceAzuriteGroup
include('azure/Item/Other/ServiceAzurite')

' renders the element
ServiceAzuriteGroup('ServiceAzuriteGroup', 'Service Azurite Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

