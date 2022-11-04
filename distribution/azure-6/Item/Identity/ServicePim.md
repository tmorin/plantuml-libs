# ServicePim


```text
azure-6/Item/Identity/ServicePim
```

```text
include('azure-6/Item/Identity/ServicePim')
```



| Illustration | ServicePim | ServicePimCard | ServicePimGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure-6/Item/Identity/ServicePim.png) | ![illustration for ServicePim](../../../azure-6/Item/Identity/ServicePim.Local.png) | ![illustration for ServicePimCard](../../../azure-6/Item/Identity/ServicePimCard.Local.png) | ![illustration for ServicePimGroup](../../../azure-6/Item/Identity/ServicePimGroup.Local.png) |




## ServicePim

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-6/bootstrap')

' loads the Item which embeds the element ServicePim
include('azure-6/Item/Identity/ServicePim')

' renders the element
ServicePim('ServicePim', 'Service Pim', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ServicePim
include('azure-6/Item/Identity/ServicePim')

' renders the element
ServicePim('ServicePim', 'Service Pim', 'an optional tech label', 'an optional description')
@enduml
```

## ServicePimCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-6/bootstrap')

' loads the Item which embeds the element ServicePimCard
include('azure-6/Item/Identity/ServicePim')

' renders the element
ServicePimCard('ServicePimCard', 'Service Pim Card', 'an optional description')
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

' loads the Item which embeds the element ServicePimCard
include('azure-6/Item/Identity/ServicePim')

' renders the element
ServicePimCard('ServicePimCard', 'Service Pim Card', 'an optional description')
@enduml
```

## ServicePimGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-6/bootstrap')

' loads the Item which embeds the element ServicePimGroup
include('azure-6/Item/Identity/ServicePim')

' renders the element
ServicePimGroup('ServicePimGroup', 'Service Pim Group', 'an optional tech label') {
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

' loads the Item which embeds the element ServicePimGroup
include('azure-6/Item/Identity/ServicePim')

' renders the element
ServicePimGroup('ServicePimGroup', 'Service Pim Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

