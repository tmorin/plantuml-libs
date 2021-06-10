# ServiceContainerRegistries


```text
azure-4/Item/Containers/ServiceContainerRegistries
```

```text
include('azure-4/Item/Containers/ServiceContainerRegistries')
```



| Illustration | ServiceContainerRegistries | ServiceContainerRegistriesCard | ServiceContainerRegistriesGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure-4/Item/Containers/ServiceContainerRegistries.png) | ![illustration for ServiceContainerRegistries](../../../azure-4/Item/Containers/ServiceContainerRegistries.Local.png) | ![illustration for ServiceContainerRegistriesCard](../../../azure-4/Item/Containers/ServiceContainerRegistriesCard.Local.png) | ![illustration for ServiceContainerRegistriesGroup](../../../azure-4/Item/Containers/ServiceContainerRegistriesGroup.Local.png) |




## ServiceContainerRegistries

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceContainerRegistries
include('azure-4/Item/Containers/ServiceContainerRegistries')

' renders the element
ServiceContainerRegistries('ServiceContainerRegistries', 'Service Container Registries', 'an optional tech label')
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
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceContainerRegistries
include('azure-4/Item/Containers/ServiceContainerRegistries')

' renders the element
ServiceContainerRegistries('ServiceContainerRegistries', 'Service Container Registries', 'an optional tech label')
@enduml
```

## ServiceContainerRegistriesCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceContainerRegistriesCard
include('azure-4/Item/Containers/ServiceContainerRegistries')

' renders the element
ServiceContainerRegistriesCard('ServiceContainerRegistriesCard', 'Service Container Registries Card', 'an optional description')
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
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceContainerRegistriesCard
include('azure-4/Item/Containers/ServiceContainerRegistries')

' renders the element
ServiceContainerRegistriesCard('ServiceContainerRegistriesCard', 'Service Container Registries Card', 'an optional description')
@enduml
```

## ServiceContainerRegistriesGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceContainerRegistriesGroup
include('azure-4/Item/Containers/ServiceContainerRegistries')

' renders the element
ServiceContainerRegistriesGroup('ServiceContainerRegistriesGroup', 'Service Container Registries Group', 'an optional tech label') {
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
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceContainerRegistriesGroup
include('azure-4/Item/Containers/ServiceContainerRegistries')

' renders the element
ServiceContainerRegistriesGroup('ServiceContainerRegistriesGroup', 'Service Container Registries Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

