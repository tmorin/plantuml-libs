# ServiceDataFactories


```text
azure/Item/Integration/ServiceDataFactories
```

```text
include('azure/Item/Integration/ServiceDataFactories')
```



| Illustration | ServiceDataFactories | ServiceDataFactoriesCard | ServiceDataFactoriesGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure/Item/Integration/ServiceDataFactories.png) | ![illustration for ServiceDataFactories](../../../azure/Item/Integration/ServiceDataFactories.Local.png) | ![illustration for ServiceDataFactoriesCard](../../../azure/Item/Integration/ServiceDataFactoriesCard.Local.png) | ![illustration for ServiceDataFactoriesGroup](../../../azure/Item/Integration/ServiceDataFactoriesGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ServiceDataFactoriesXs>`
- `<$ServiceDataFactoriesSm>`
- `<$ServiceDataFactoriesMd>`
- `<$ServiceDataFactoriesLg>`





## ServiceDataFactories

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure/bootstrap')

' loads the Item which embeds the element ServiceDataFactories
include('azure/Item/Integration/ServiceDataFactories')

' renders the element
ServiceDataFactories('ServiceDataFactories', 'Service Data Factories', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ServiceDataFactories
include('azure/Item/Integration/ServiceDataFactories')

' renders the element
ServiceDataFactories('ServiceDataFactories', 'Service Data Factories', 'an optional tech label', 'an optional description')
@enduml
```

## ServiceDataFactoriesCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure/bootstrap')

' loads the Item which embeds the element ServiceDataFactoriesCard
include('azure/Item/Integration/ServiceDataFactories')

' renders the element
ServiceDataFactoriesCard('ServiceDataFactoriesCard', 'Service Data Factories Card', 'an optional description')
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

' loads the Item which embeds the element ServiceDataFactoriesCard
include('azure/Item/Integration/ServiceDataFactories')

' renders the element
ServiceDataFactoriesCard('ServiceDataFactoriesCard', 'Service Data Factories Card', 'an optional description')
@enduml
```

## ServiceDataFactoriesGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure/bootstrap')

' loads the Item which embeds the element ServiceDataFactoriesGroup
include('azure/Item/Integration/ServiceDataFactories')

' renders the element
ServiceDataFactoriesGroup('ServiceDataFactoriesGroup', 'Service Data Factories Group', 'an optional tech label') {
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

' loads the Item which embeds the element ServiceDataFactoriesGroup
include('azure/Item/Integration/ServiceDataFactories')

' renders the element
ServiceDataFactoriesGroup('ServiceDataFactoriesGroup', 'Service Data Factories Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

