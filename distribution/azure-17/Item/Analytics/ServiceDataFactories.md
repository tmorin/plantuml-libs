# ServiceDataFactories


```text
azure-17/Item/Analytics/ServiceDataFactories
```

```text
include('azure-17/Item/Analytics/ServiceDataFactories')
```



| Illustration | ServiceDataFactories | ServiceDataFactoriesCard | ServiceDataFactoriesGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure-17/Item/Analytics/ServiceDataFactories.png) | ![illustration for ServiceDataFactories](../../../azure-17/Item/Analytics/ServiceDataFactories.Local.png) | ![illustration for ServiceDataFactoriesCard](../../../azure-17/Item/Analytics/ServiceDataFactoriesCard.Local.png) | ![illustration for ServiceDataFactoriesGroup](../../../azure-17/Item/Analytics/ServiceDataFactoriesGroup.Local.png) |



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
include('azure-17/bootstrap')

' loads the Item which embeds the element ServiceDataFactories
include('azure-17/Item/Analytics/ServiceDataFactories')

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
include('azure-17/bootstrap')

' loads the Item which embeds the element ServiceDataFactories
include('azure-17/Item/Analytics/ServiceDataFactories')

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
include('azure-17/bootstrap')

' loads the Item which embeds the element ServiceDataFactoriesCard
include('azure-17/Item/Analytics/ServiceDataFactories')

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
include('azure-17/bootstrap')

' loads the Item which embeds the element ServiceDataFactoriesCard
include('azure-17/Item/Analytics/ServiceDataFactories')

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
include('azure-17/bootstrap')

' loads the Item which embeds the element ServiceDataFactoriesGroup
include('azure-17/Item/Analytics/ServiceDataFactories')

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
include('azure-17/bootstrap')

' loads the Item which embeds the element ServiceDataFactoriesGroup
include('azure-17/Item/Analytics/ServiceDataFactories')

' renders the element
ServiceDataFactoriesGroup('ServiceDataFactoriesGroup', 'Service Data Factories Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

