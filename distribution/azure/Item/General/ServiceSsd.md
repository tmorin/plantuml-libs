# ServiceSsd


```text
azure/Item/General/ServiceSsd
```

```text
include('azure/Item/General/ServiceSsd')
```



| Illustration | ServiceSsd | ServiceSsdCard | ServiceSsdGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure/Item/General/ServiceSsd.png) | ![illustration for ServiceSsd](../../../azure/Item/General/ServiceSsd.Local.png) | ![illustration for ServiceSsdCard](../../../azure/Item/General/ServiceSsdCard.Local.png) | ![illustration for ServiceSsdGroup](../../../azure/Item/General/ServiceSsdGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ServiceSsdXs>`
- `<$ServiceSsdSm>`
- `<$ServiceSsdMd>`
- `<$ServiceSsdLg>`





## ServiceSsd

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure/bootstrap')

' loads the Item which embeds the element ServiceSsd
include('azure/Item/General/ServiceSsd')

' renders the element
ServiceSsd('ServiceSsd', 'Service Ssd', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ServiceSsd
include('azure/Item/General/ServiceSsd')

' renders the element
ServiceSsd('ServiceSsd', 'Service Ssd', 'an optional tech label', 'an optional description')
@enduml
```

## ServiceSsdCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure/bootstrap')

' loads the Item which embeds the element ServiceSsdCard
include('azure/Item/General/ServiceSsd')

' renders the element
ServiceSsdCard('ServiceSsdCard', 'Service Ssd Card', 'an optional description')
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

' loads the Item which embeds the element ServiceSsdCard
include('azure/Item/General/ServiceSsd')

' renders the element
ServiceSsdCard('ServiceSsdCard', 'Service Ssd Card', 'an optional description')
@enduml
```

## ServiceSsdGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure/bootstrap')

' loads the Item which embeds the element ServiceSsdGroup
include('azure/Item/General/ServiceSsd')

' renders the element
ServiceSsdGroup('ServiceSsdGroup', 'Service Ssd Group', 'an optional tech label') {
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

' loads the Item which embeds the element ServiceSsdGroup
include('azure/Item/General/ServiceSsd')

' renders the element
ServiceSsdGroup('ServiceSsdGroup', 'Service Ssd Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

