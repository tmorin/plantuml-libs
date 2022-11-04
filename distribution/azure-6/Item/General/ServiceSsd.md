# ServiceSsd


```text
azure-6/Item/General/ServiceSsd
```

```text
include('azure-6/Item/General/ServiceSsd')
```



| Illustration | ServiceSsd | ServiceSsdCard | ServiceSsdGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure-6/Item/General/ServiceSsd.png) | ![illustration for ServiceSsd](../../../azure-6/Item/General/ServiceSsd.Local.png) | ![illustration for ServiceSsdCard](../../../azure-6/Item/General/ServiceSsdCard.Local.png) | ![illustration for ServiceSsdGroup](../../../azure-6/Item/General/ServiceSsdGroup.Local.png) |




## ServiceSsd

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-6/bootstrap')

' loads the Item which embeds the element ServiceSsd
include('azure-6/Item/General/ServiceSsd')

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
include('azure-6/bootstrap')

' loads the Item which embeds the element ServiceSsd
include('azure-6/Item/General/ServiceSsd')

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
include('azure-6/bootstrap')

' loads the Item which embeds the element ServiceSsdCard
include('azure-6/Item/General/ServiceSsd')

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
include('azure-6/bootstrap')

' loads the Item which embeds the element ServiceSsdCard
include('azure-6/Item/General/ServiceSsd')

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
include('azure-6/bootstrap')

' loads the Item which embeds the element ServiceSsdGroup
include('azure-6/Item/General/ServiceSsd')

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
include('azure-6/bootstrap')

' loads the Item which embeds the element ServiceSsdGroup
include('azure-6/Item/General/ServiceSsd')

' renders the element
ServiceSsdGroup('ServiceSsdGroup', 'Service Ssd Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

