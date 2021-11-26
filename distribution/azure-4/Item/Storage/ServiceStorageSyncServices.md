# ServiceStorageSyncServices


```text
azure-4/Item/Storage/ServiceStorageSyncServices
```

```text
include('azure-4/Item/Storage/ServiceStorageSyncServices')
```



| Illustration | ServiceStorageSyncServices | ServiceStorageSyncServicesCard | ServiceStorageSyncServicesGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure-4/Item/Storage/ServiceStorageSyncServices.png) | ![illustration for ServiceStorageSyncServices](../../../azure-4/Item/Storage/ServiceStorageSyncServices.Local.png) | ![illustration for ServiceStorageSyncServicesCard](../../../azure-4/Item/Storage/ServiceStorageSyncServicesCard.Local.png) | ![illustration for ServiceStorageSyncServicesGroup](../../../azure-4/Item/Storage/ServiceStorageSyncServicesGroup.Local.png) |




## ServiceStorageSyncServices

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceStorageSyncServices
include('azure-4/Item/Storage/ServiceStorageSyncServices')

' renders the element
ServiceStorageSyncServices('ServiceStorageSyncServices', 'Service Storage Sync Services', 'an optional tech label')
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

' loads the Item which embeds the element ServiceStorageSyncServices
include('azure-4/Item/Storage/ServiceStorageSyncServices')

' renders the element
ServiceStorageSyncServices('ServiceStorageSyncServices', 'Service Storage Sync Services', 'an optional tech label')
@enduml
```

## ServiceStorageSyncServicesCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceStorageSyncServicesCard
include('azure-4/Item/Storage/ServiceStorageSyncServices')

' renders the element
ServiceStorageSyncServicesCard('ServiceStorageSyncServicesCard', 'Service Storage Sync Services Card', 'an optional description')
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

' loads the Item which embeds the element ServiceStorageSyncServicesCard
include('azure-4/Item/Storage/ServiceStorageSyncServices')

' renders the element
ServiceStorageSyncServicesCard('ServiceStorageSyncServicesCard', 'Service Storage Sync Services Card', 'an optional description')
@enduml
```

## ServiceStorageSyncServicesGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceStorageSyncServicesGroup
include('azure-4/Item/Storage/ServiceStorageSyncServices')

' renders the element
ServiceStorageSyncServicesGroup('ServiceStorageSyncServicesGroup', 'Service Storage Sync Services Group', 'an optional tech label') {
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

' loads the Item which embeds the element ServiceStorageSyncServicesGroup
include('azure-4/Item/Storage/ServiceStorageSyncServices')

' renders the element
ServiceStorageSyncServicesGroup('ServiceStorageSyncServicesGroup', 'Service Storage Sync Services Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

