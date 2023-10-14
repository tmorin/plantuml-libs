# ServiceAzureStorageMover


```text
azure-17/Item/Other/ServiceAzureStorageMover
```

```text
include('azure-17/Item/Other/ServiceAzureStorageMover')
```



| Illustration | ServiceAzureStorageMover | ServiceAzureStorageMoverCard | ServiceAzureStorageMoverGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure-17/Item/Other/ServiceAzureStorageMover.png) | ![illustration for ServiceAzureStorageMover](../../../azure-17/Item/Other/ServiceAzureStorageMover.Local.png) | ![illustration for ServiceAzureStorageMoverCard](../../../azure-17/Item/Other/ServiceAzureStorageMoverCard.Local.png) | ![illustration for ServiceAzureStorageMoverGroup](../../../azure-17/Item/Other/ServiceAzureStorageMoverGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ServiceAzureStorageMoverXs>`
- `<$ServiceAzureStorageMoverSm>`
- `<$ServiceAzureStorageMoverMd>`
- `<$ServiceAzureStorageMoverLg>`





## ServiceAzureStorageMover

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-17/bootstrap')

' loads the Item which embeds the element ServiceAzureStorageMover
include('azure-17/Item/Other/ServiceAzureStorageMover')

' renders the element
ServiceAzureStorageMover('ServiceAzureStorageMover', 'Service Azure Storage Mover', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ServiceAzureStorageMover
include('azure-17/Item/Other/ServiceAzureStorageMover')

' renders the element
ServiceAzureStorageMover('ServiceAzureStorageMover', 'Service Azure Storage Mover', 'an optional tech label', 'an optional description')
@enduml
```

## ServiceAzureStorageMoverCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-17/bootstrap')

' loads the Item which embeds the element ServiceAzureStorageMoverCard
include('azure-17/Item/Other/ServiceAzureStorageMover')

' renders the element
ServiceAzureStorageMoverCard('ServiceAzureStorageMoverCard', 'Service Azure Storage Mover Card', 'an optional description')
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

' loads the Item which embeds the element ServiceAzureStorageMoverCard
include('azure-17/Item/Other/ServiceAzureStorageMover')

' renders the element
ServiceAzureStorageMoverCard('ServiceAzureStorageMoverCard', 'Service Azure Storage Mover Card', 'an optional description')
@enduml
```

## ServiceAzureStorageMoverGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-17/bootstrap')

' loads the Item which embeds the element ServiceAzureStorageMoverGroup
include('azure-17/Item/Other/ServiceAzureStorageMover')

' renders the element
ServiceAzureStorageMoverGroup('ServiceAzureStorageMoverGroup', 'Service Azure Storage Mover Group', 'an optional tech label') {
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

' loads the Item which embeds the element ServiceAzureStorageMoverGroup
include('azure-17/Item/Other/ServiceAzureStorageMover')

' renders the element
ServiceAzureStorageMoverGroup('ServiceAzureStorageMoverGroup', 'Service Azure Storage Mover Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

