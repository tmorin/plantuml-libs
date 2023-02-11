# ServiceAquila


```text
azure-11/Item/NewIcons/ServiceAquila
```

```text
include('azure-11/Item/NewIcons/ServiceAquila')
```



| Illustration | ServiceAquila | ServiceAquilaCard | ServiceAquilaGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure-11/Item/NewIcons/ServiceAquila.png) | ![illustration for ServiceAquila](../../../azure-11/Item/NewIcons/ServiceAquila.Local.png) | ![illustration for ServiceAquilaCard](../../../azure-11/Item/NewIcons/ServiceAquilaCard.Local.png) | ![illustration for ServiceAquilaGroup](../../../azure-11/Item/NewIcons/ServiceAquilaGroup.Local.png) |




## ServiceAquila

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-11/bootstrap')

' loads the Item which embeds the element ServiceAquila
include('azure-11/Item/NewIcons/ServiceAquila')

' renders the element
ServiceAquila('ServiceAquila', 'Service Aquila', 'an optional tech label', 'an optional description')
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
include('azure-11/bootstrap')

' loads the Item which embeds the element ServiceAquila
include('azure-11/Item/NewIcons/ServiceAquila')

' renders the element
ServiceAquila('ServiceAquila', 'Service Aquila', 'an optional tech label', 'an optional description')
@enduml
```

## ServiceAquilaCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-11/bootstrap')

' loads the Item which embeds the element ServiceAquilaCard
include('azure-11/Item/NewIcons/ServiceAquila')

' renders the element
ServiceAquilaCard('ServiceAquilaCard', 'Service Aquila Card', 'an optional description')
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
include('azure-11/bootstrap')

' loads the Item which embeds the element ServiceAquilaCard
include('azure-11/Item/NewIcons/ServiceAquila')

' renders the element
ServiceAquilaCard('ServiceAquilaCard', 'Service Aquila Card', 'an optional description')
@enduml
```

## ServiceAquilaGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-11/bootstrap')

' loads the Item which embeds the element ServiceAquilaGroup
include('azure-11/Item/NewIcons/ServiceAquila')

' renders the element
ServiceAquilaGroup('ServiceAquilaGroup', 'Service Aquila Group', 'an optional tech label') {
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
include('azure-11/bootstrap')

' loads the Item which embeds the element ServiceAquilaGroup
include('azure-11/Item/NewIcons/ServiceAquila')

' renders the element
ServiceAquilaGroup('ServiceAquilaGroup', 'Service Aquila Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

