# ServiceAksAutomatic


```text
azure-19/Item/NewIcons/ServiceAksAutomatic
```

```text
include('azure-19/Item/NewIcons/ServiceAksAutomatic')
```



| Illustration | ServiceAksAutomatic | ServiceAksAutomaticCard | ServiceAksAutomaticGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure-19/Item/NewIcons/ServiceAksAutomatic.png) | ![illustration for ServiceAksAutomatic](../../../azure-19/Item/NewIcons/ServiceAksAutomatic.Local.png) | ![illustration for ServiceAksAutomaticCard](../../../azure-19/Item/NewIcons/ServiceAksAutomaticCard.Local.png) | ![illustration for ServiceAksAutomaticGroup](../../../azure-19/Item/NewIcons/ServiceAksAutomaticGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ServiceAksAutomaticXs>`
- `<$ServiceAksAutomaticSm>`
- `<$ServiceAksAutomaticMd>`
- `<$ServiceAksAutomaticLg>`





## ServiceAksAutomatic

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-19/bootstrap')

' loads the Item which embeds the element ServiceAksAutomatic
include('azure-19/Item/NewIcons/ServiceAksAutomatic')

' renders the element
ServiceAksAutomatic('ServiceAksAutomatic', 'Service Aks Automatic', 'an optional tech label', 'an optional description')
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
include('azure-19/bootstrap')

' loads the Item which embeds the element ServiceAksAutomatic
include('azure-19/Item/NewIcons/ServiceAksAutomatic')

' renders the element
ServiceAksAutomatic('ServiceAksAutomatic', 'Service Aks Automatic', 'an optional tech label', 'an optional description')
@enduml
```

## ServiceAksAutomaticCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-19/bootstrap')

' loads the Item which embeds the element ServiceAksAutomaticCard
include('azure-19/Item/NewIcons/ServiceAksAutomatic')

' renders the element
ServiceAksAutomaticCard('ServiceAksAutomaticCard', 'Service Aks Automatic Card', 'an optional description')
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
include('azure-19/bootstrap')

' loads the Item which embeds the element ServiceAksAutomaticCard
include('azure-19/Item/NewIcons/ServiceAksAutomatic')

' renders the element
ServiceAksAutomaticCard('ServiceAksAutomaticCard', 'Service Aks Automatic Card', 'an optional description')
@enduml
```

## ServiceAksAutomaticGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-19/bootstrap')

' loads the Item which embeds the element ServiceAksAutomaticGroup
include('azure-19/Item/NewIcons/ServiceAksAutomatic')

' renders the element
ServiceAksAutomaticGroup('ServiceAksAutomaticGroup', 'Service Aks Automatic Group', 'an optional tech label') {
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
include('azure-19/bootstrap')

' loads the Item which embeds the element ServiceAksAutomaticGroup
include('azure-19/Item/NewIcons/ServiceAksAutomatic')

' renders the element
ServiceAksAutomaticGroup('ServiceAksAutomaticGroup', 'Service Aks Automatic Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

