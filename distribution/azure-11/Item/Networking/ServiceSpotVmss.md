# ServiceSpotVmss


```text
azure-11/Item/Networking/ServiceSpotVmss
```

```text
include('azure-11/Item/Networking/ServiceSpotVmss')
```



| Illustration | ServiceSpotVmss | ServiceSpotVmssCard | ServiceSpotVmssGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure-11/Item/Networking/ServiceSpotVmss.png) | ![illustration for ServiceSpotVmss](../../../azure-11/Item/Networking/ServiceSpotVmss.Local.png) | ![illustration for ServiceSpotVmssCard](../../../azure-11/Item/Networking/ServiceSpotVmssCard.Local.png) | ![illustration for ServiceSpotVmssGroup](../../../azure-11/Item/Networking/ServiceSpotVmssGroup.Local.png) |




## ServiceSpotVmss

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-11/bootstrap')

' loads the Item which embeds the element ServiceSpotVmss
include('azure-11/Item/Networking/ServiceSpotVmss')

' renders the element
ServiceSpotVmss('ServiceSpotVmss', 'Service Spot Vmss', 'an optional tech label', 'an optional description')
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
include('azure-11/bootstrap')

' loads the Item which embeds the element ServiceSpotVmss
include('azure-11/Item/Networking/ServiceSpotVmss')

' renders the element
ServiceSpotVmss('ServiceSpotVmss', 'Service Spot Vmss', 'an optional tech label', 'an optional description')
@enduml
```

## ServiceSpotVmssCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-11/bootstrap')

' loads the Item which embeds the element ServiceSpotVmssCard
include('azure-11/Item/Networking/ServiceSpotVmss')

' renders the element
ServiceSpotVmssCard('ServiceSpotVmssCard', 'Service Spot Vmss Card', 'an optional description')
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
include('azure-11/bootstrap')

' loads the Item which embeds the element ServiceSpotVmssCard
include('azure-11/Item/Networking/ServiceSpotVmss')

' renders the element
ServiceSpotVmssCard('ServiceSpotVmssCard', 'Service Spot Vmss Card', 'an optional description')
@enduml
```

## ServiceSpotVmssGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-11/bootstrap')

' loads the Item which embeds the element ServiceSpotVmssGroup
include('azure-11/Item/Networking/ServiceSpotVmss')

' renders the element
ServiceSpotVmssGroup('ServiceSpotVmssGroup', 'Service Spot Vmss Group', 'an optional tech label') {
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
include('azure-11/bootstrap')

' loads the Item which embeds the element ServiceSpotVmssGroup
include('azure-11/Item/Networking/ServiceSpotVmss')

' renders the element
ServiceSpotVmssGroup('ServiceSpotVmssGroup', 'Service Spot Vmss Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

