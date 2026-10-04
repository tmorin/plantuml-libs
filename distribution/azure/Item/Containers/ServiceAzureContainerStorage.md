# ServiceAzureContainerStorage


```text
azure/Item/Containers/ServiceAzureContainerStorage
```

```text
include('azure/Item/Containers/ServiceAzureContainerStorage')
```



| Illustration | ServiceAzureContainerStorage | ServiceAzureContainerStorageCard | ServiceAzureContainerStorageGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure/Item/Containers/ServiceAzureContainerStorage.png) | ![illustration for ServiceAzureContainerStorage](../../../azure/Item/Containers/ServiceAzureContainerStorage.Local.png) | ![illustration for ServiceAzureContainerStorageCard](../../../azure/Item/Containers/ServiceAzureContainerStorageCard.Local.png) | ![illustration for ServiceAzureContainerStorageGroup](../../../azure/Item/Containers/ServiceAzureContainerStorageGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ServiceAzureContainerStorageXs>`
- `<$ServiceAzureContainerStorageSm>`
- `<$ServiceAzureContainerStorageMd>`
- `<$ServiceAzureContainerStorageLg>`





## ServiceAzureContainerStorage

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure/bootstrap')

' loads the Item which embeds the element ServiceAzureContainerStorage
include('azure/Item/Containers/ServiceAzureContainerStorage')

' renders the element
ServiceAzureContainerStorage('ServiceAzureContainerStorage', 'Service Azure Container Storage', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ServiceAzureContainerStorage
include('azure/Item/Containers/ServiceAzureContainerStorage')

' renders the element
ServiceAzureContainerStorage('ServiceAzureContainerStorage', 'Service Azure Container Storage', 'an optional tech label', 'an optional description')
@enduml
```

## ServiceAzureContainerStorageCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure/bootstrap')

' loads the Item which embeds the element ServiceAzureContainerStorageCard
include('azure/Item/Containers/ServiceAzureContainerStorage')

' renders the element
ServiceAzureContainerStorageCard('ServiceAzureContainerStorageCard', 'Service Azure Container Storage Card', 'an optional description')
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

' loads the Item which embeds the element ServiceAzureContainerStorageCard
include('azure/Item/Containers/ServiceAzureContainerStorage')

' renders the element
ServiceAzureContainerStorageCard('ServiceAzureContainerStorageCard', 'Service Azure Container Storage Card', 'an optional description')
@enduml
```

## ServiceAzureContainerStorageGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure/bootstrap')

' loads the Item which embeds the element ServiceAzureContainerStorageGroup
include('azure/Item/Containers/ServiceAzureContainerStorage')

' renders the element
ServiceAzureContainerStorageGroup('ServiceAzureContainerStorageGroup', 'Service Azure Container Storage Group', 'an optional tech label') {
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

' loads the Item which embeds the element ServiceAzureContainerStorageGroup
include('azure/Item/Containers/ServiceAzureContainerStorage')

' renders the element
ServiceAzureContainerStorageGroup('ServiceAzureContainerStorageGroup', 'Service Azure Container Storage Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

