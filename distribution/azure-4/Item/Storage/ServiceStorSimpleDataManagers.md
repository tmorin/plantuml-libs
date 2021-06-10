# ServiceStorSimpleDataManagers


```text
azure-4/Item/Storage/ServiceStorSimpleDataManagers
```

```text
include('azure-4/Item/Storage/ServiceStorSimpleDataManagers')
```



| Illustration | ServiceStorSimpleDataManagers | ServiceStorSimpleDataManagersCard | ServiceStorSimpleDataManagersGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure-4/Item/Storage/ServiceStorSimpleDataManagers.png) | ![illustration for ServiceStorSimpleDataManagers](../../../azure-4/Item/Storage/ServiceStorSimpleDataManagers.Local.png) | ![illustration for ServiceStorSimpleDataManagersCard](../../../azure-4/Item/Storage/ServiceStorSimpleDataManagersCard.Local.png) | ![illustration for ServiceStorSimpleDataManagersGroup](../../../azure-4/Item/Storage/ServiceStorSimpleDataManagersGroup.Local.png) |




## ServiceStorSimpleDataManagers

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceStorSimpleDataManagers
include('azure-4/Item/Storage/ServiceStorSimpleDataManagers')

' renders the element
ServiceStorSimpleDataManagers('ServiceStorSimpleDataManagers', 'Service Stor Simple Data Managers', 'an optional tech label')
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

' loads the Item which embeds the element ServiceStorSimpleDataManagers
include('azure-4/Item/Storage/ServiceStorSimpleDataManagers')

' renders the element
ServiceStorSimpleDataManagers('ServiceStorSimpleDataManagers', 'Service Stor Simple Data Managers', 'an optional tech label')
@enduml
```

## ServiceStorSimpleDataManagersCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceStorSimpleDataManagersCard
include('azure-4/Item/Storage/ServiceStorSimpleDataManagers')

' renders the element
ServiceStorSimpleDataManagersCard('ServiceStorSimpleDataManagersCard', 'Service Stor Simple Data Managers Card', 'an optional description')
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

' loads the Item which embeds the element ServiceStorSimpleDataManagersCard
include('azure-4/Item/Storage/ServiceStorSimpleDataManagers')

' renders the element
ServiceStorSimpleDataManagersCard('ServiceStorSimpleDataManagersCard', 'Service Stor Simple Data Managers Card', 'an optional description')
@enduml
```

## ServiceStorSimpleDataManagersGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceStorSimpleDataManagersGroup
include('azure-4/Item/Storage/ServiceStorSimpleDataManagers')

' renders the element
ServiceStorSimpleDataManagersGroup('ServiceStorSimpleDataManagersGroup', 'Service Stor Simple Data Managers Group', 'an optional tech label') {
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

' loads the Item which embeds the element ServiceStorSimpleDataManagersGroup
include('azure-4/Item/Storage/ServiceStorSimpleDataManagers')

' renders the element
ServiceStorSimpleDataManagersGroup('ServiceStorSimpleDataManagersGroup', 'Service Stor Simple Data Managers Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

