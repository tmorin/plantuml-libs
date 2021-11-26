# ServiceStorSimpleDeviceManagers


```text
azure-4/Item/Storage/ServiceStorSimpleDeviceManagers
```

```text
include('azure-4/Item/Storage/ServiceStorSimpleDeviceManagers')
```



| Illustration | ServiceStorSimpleDeviceManagers | ServiceStorSimpleDeviceManagersCard | ServiceStorSimpleDeviceManagersGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure-4/Item/Storage/ServiceStorSimpleDeviceManagers.png) | ![illustration for ServiceStorSimpleDeviceManagers](../../../azure-4/Item/Storage/ServiceStorSimpleDeviceManagers.Local.png) | ![illustration for ServiceStorSimpleDeviceManagersCard](../../../azure-4/Item/Storage/ServiceStorSimpleDeviceManagersCard.Local.png) | ![illustration for ServiceStorSimpleDeviceManagersGroup](../../../azure-4/Item/Storage/ServiceStorSimpleDeviceManagersGroup.Local.png) |




## ServiceStorSimpleDeviceManagers

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceStorSimpleDeviceManagers
include('azure-4/Item/Storage/ServiceStorSimpleDeviceManagers')

' renders the element
ServiceStorSimpleDeviceManagers('ServiceStorSimpleDeviceManagers', 'Service Stor Simple Device Managers', 'an optional tech label')
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

' loads the Item which embeds the element ServiceStorSimpleDeviceManagers
include('azure-4/Item/Storage/ServiceStorSimpleDeviceManagers')

' renders the element
ServiceStorSimpleDeviceManagers('ServiceStorSimpleDeviceManagers', 'Service Stor Simple Device Managers', 'an optional tech label')
@enduml
```

## ServiceStorSimpleDeviceManagersCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceStorSimpleDeviceManagersCard
include('azure-4/Item/Storage/ServiceStorSimpleDeviceManagers')

' renders the element
ServiceStorSimpleDeviceManagersCard('ServiceStorSimpleDeviceManagersCard', 'Service Stor Simple Device Managers Card', 'an optional description')
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

' loads the Item which embeds the element ServiceStorSimpleDeviceManagersCard
include('azure-4/Item/Storage/ServiceStorSimpleDeviceManagers')

' renders the element
ServiceStorSimpleDeviceManagersCard('ServiceStorSimpleDeviceManagersCard', 'Service Stor Simple Device Managers Card', 'an optional description')
@enduml
```

## ServiceStorSimpleDeviceManagersGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceStorSimpleDeviceManagersGroup
include('azure-4/Item/Storage/ServiceStorSimpleDeviceManagers')

' renders the element
ServiceStorSimpleDeviceManagersGroup('ServiceStorSimpleDeviceManagersGroup', 'Service Stor Simple Device Managers Group', 'an optional tech label') {
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

' loads the Item which embeds the element ServiceStorSimpleDeviceManagersGroup
include('azure-4/Item/Storage/ServiceStorSimpleDeviceManagers')

' renders the element
ServiceStorSimpleDeviceManagersGroup('ServiceStorSimpleDeviceManagersGroup', 'Service Stor Simple Device Managers Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

