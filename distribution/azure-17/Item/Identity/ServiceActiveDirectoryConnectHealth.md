# ServiceActiveDirectoryConnectHealth


```text
azure-17/Item/Identity/ServiceActiveDirectoryConnectHealth
```

```text
include('azure-17/Item/Identity/ServiceActiveDirectoryConnectHealth')
```



| Illustration | ServiceActiveDirectoryConnectHealth | ServiceActiveDirectoryConnectHealthCard | ServiceActiveDirectoryConnectHealthGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure-17/Item/Identity/ServiceActiveDirectoryConnectHealth.png) | ![illustration for ServiceActiveDirectoryConnectHealth](../../../azure-17/Item/Identity/ServiceActiveDirectoryConnectHealth.Local.png) | ![illustration for ServiceActiveDirectoryConnectHealthCard](../../../azure-17/Item/Identity/ServiceActiveDirectoryConnectHealthCard.Local.png) | ![illustration for ServiceActiveDirectoryConnectHealthGroup](../../../azure-17/Item/Identity/ServiceActiveDirectoryConnectHealthGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ServiceActiveDirectoryConnectHealthXs>`
- `<$ServiceActiveDirectoryConnectHealthSm>`
- `<$ServiceActiveDirectoryConnectHealthMd>`
- `<$ServiceActiveDirectoryConnectHealthLg>`





## ServiceActiveDirectoryConnectHealth

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-17/bootstrap')

' loads the Item which embeds the element ServiceActiveDirectoryConnectHealth
include('azure-17/Item/Identity/ServiceActiveDirectoryConnectHealth')

' renders the element
ServiceActiveDirectoryConnectHealth('ServiceActiveDirectoryConnectHealth', 'Service Active Directory Connect Health', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ServiceActiveDirectoryConnectHealth
include('azure-17/Item/Identity/ServiceActiveDirectoryConnectHealth')

' renders the element
ServiceActiveDirectoryConnectHealth('ServiceActiveDirectoryConnectHealth', 'Service Active Directory Connect Health', 'an optional tech label', 'an optional description')
@enduml
```

## ServiceActiveDirectoryConnectHealthCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-17/bootstrap')

' loads the Item which embeds the element ServiceActiveDirectoryConnectHealthCard
include('azure-17/Item/Identity/ServiceActiveDirectoryConnectHealth')

' renders the element
ServiceActiveDirectoryConnectHealthCard('ServiceActiveDirectoryConnectHealthCard', 'Service Active Directory Connect Health Card', 'an optional description')
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

' loads the Item which embeds the element ServiceActiveDirectoryConnectHealthCard
include('azure-17/Item/Identity/ServiceActiveDirectoryConnectHealth')

' renders the element
ServiceActiveDirectoryConnectHealthCard('ServiceActiveDirectoryConnectHealthCard', 'Service Active Directory Connect Health Card', 'an optional description')
@enduml
```

## ServiceActiveDirectoryConnectHealthGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-17/bootstrap')

' loads the Item which embeds the element ServiceActiveDirectoryConnectHealthGroup
include('azure-17/Item/Identity/ServiceActiveDirectoryConnectHealth')

' renders the element
ServiceActiveDirectoryConnectHealthGroup('ServiceActiveDirectoryConnectHealthGroup', 'Service Active Directory Connect Health Group', 'an optional tech label') {
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

' loads the Item which embeds the element ServiceActiveDirectoryConnectHealthGroup
include('azure-17/Item/Identity/ServiceActiveDirectoryConnectHealth')

' renders the element
ServiceActiveDirectoryConnectHealthGroup('ServiceActiveDirectoryConnectHealthGroup', 'Service Active Directory Connect Health Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

