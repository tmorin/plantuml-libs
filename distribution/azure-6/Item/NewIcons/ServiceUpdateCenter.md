# ServiceUpdateCenter


```text
azure-6/Item/NewIcons/ServiceUpdateCenter
```

```text
include('azure-6/Item/NewIcons/ServiceUpdateCenter')
```



| Illustration | ServiceUpdateCenter | ServiceUpdateCenterCard | ServiceUpdateCenterGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure-6/Item/NewIcons/ServiceUpdateCenter.png) | ![illustration for ServiceUpdateCenter](../../../azure-6/Item/NewIcons/ServiceUpdateCenter.Local.png) | ![illustration for ServiceUpdateCenterCard](../../../azure-6/Item/NewIcons/ServiceUpdateCenterCard.Local.png) | ![illustration for ServiceUpdateCenterGroup](../../../azure-6/Item/NewIcons/ServiceUpdateCenterGroup.Local.png) |




## ServiceUpdateCenter

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-6/bootstrap')

' loads the Item which embeds the element ServiceUpdateCenter
include('azure-6/Item/NewIcons/ServiceUpdateCenter')

' renders the element
ServiceUpdateCenter('ServiceUpdateCenter', 'Service Update Center', 'an optional tech label', 'an optional description')
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
include('azure-6/bootstrap')

' loads the Item which embeds the element ServiceUpdateCenter
include('azure-6/Item/NewIcons/ServiceUpdateCenter')

' renders the element
ServiceUpdateCenter('ServiceUpdateCenter', 'Service Update Center', 'an optional tech label', 'an optional description')
@enduml
```

## ServiceUpdateCenterCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-6/bootstrap')

' loads the Item which embeds the element ServiceUpdateCenterCard
include('azure-6/Item/NewIcons/ServiceUpdateCenter')

' renders the element
ServiceUpdateCenterCard('ServiceUpdateCenterCard', 'Service Update Center Card', 'an optional description')
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
include('azure-6/bootstrap')

' loads the Item which embeds the element ServiceUpdateCenterCard
include('azure-6/Item/NewIcons/ServiceUpdateCenter')

' renders the element
ServiceUpdateCenterCard('ServiceUpdateCenterCard', 'Service Update Center Card', 'an optional description')
@enduml
```

## ServiceUpdateCenterGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-6/bootstrap')

' loads the Item which embeds the element ServiceUpdateCenterGroup
include('azure-6/Item/NewIcons/ServiceUpdateCenter')

' renders the element
ServiceUpdateCenterGroup('ServiceUpdateCenterGroup', 'Service Update Center Group', 'an optional tech label') {
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
include('azure-6/bootstrap')

' loads the Item which embeds the element ServiceUpdateCenterGroup
include('azure-6/Item/NewIcons/ServiceUpdateCenter')

' renders the element
ServiceUpdateCenterGroup('ServiceUpdateCenterGroup', 'Service Update Center Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

