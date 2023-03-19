# ServiceAutomanagedVm


```text
azure-11/Item/Compute/ServiceAutomanagedVm
```

```text
include('azure-11/Item/Compute/ServiceAutomanagedVm')
```



| Illustration | ServiceAutomanagedVm | ServiceAutomanagedVmCard | ServiceAutomanagedVmGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure-11/Item/Compute/ServiceAutomanagedVm.png) | ![illustration for ServiceAutomanagedVm](../../../azure-11/Item/Compute/ServiceAutomanagedVm.Local.png) | ![illustration for ServiceAutomanagedVmCard](../../../azure-11/Item/Compute/ServiceAutomanagedVmCard.Local.png) | ![illustration for ServiceAutomanagedVmGroup](../../../azure-11/Item/Compute/ServiceAutomanagedVmGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ServiceAutomanagedVmXs>`
- `<$ServiceAutomanagedVmSm>`
- `<$ServiceAutomanagedVmMd>`
- `<$ServiceAutomanagedVmLg>`





## ServiceAutomanagedVm

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-11/bootstrap')

' loads the Item which embeds the element ServiceAutomanagedVm
include('azure-11/Item/Compute/ServiceAutomanagedVm')

' renders the element
ServiceAutomanagedVm('ServiceAutomanagedVm', 'Service Automanaged Vm', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ServiceAutomanagedVm
include('azure-11/Item/Compute/ServiceAutomanagedVm')

' renders the element
ServiceAutomanagedVm('ServiceAutomanagedVm', 'Service Automanaged Vm', 'an optional tech label', 'an optional description')
@enduml
```

## ServiceAutomanagedVmCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-11/bootstrap')

' loads the Item which embeds the element ServiceAutomanagedVmCard
include('azure-11/Item/Compute/ServiceAutomanagedVm')

' renders the element
ServiceAutomanagedVmCard('ServiceAutomanagedVmCard', 'Service Automanaged Vm Card', 'an optional description')
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

' loads the Item which embeds the element ServiceAutomanagedVmCard
include('azure-11/Item/Compute/ServiceAutomanagedVm')

' renders the element
ServiceAutomanagedVmCard('ServiceAutomanagedVmCard', 'Service Automanaged Vm Card', 'an optional description')
@enduml
```

## ServiceAutomanagedVmGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-11/bootstrap')

' loads the Item which embeds the element ServiceAutomanagedVmGroup
include('azure-11/Item/Compute/ServiceAutomanagedVm')

' renders the element
ServiceAutomanagedVmGroup('ServiceAutomanagedVmGroup', 'Service Automanaged Vm Group', 'an optional tech label') {
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

' loads the Item which embeds the element ServiceAutomanagedVmGroup
include('azure-11/Item/Compute/ServiceAutomanagedVm')

' renders the element
ServiceAutomanagedVmGroup('ServiceAutomanagedVmGroup', 'Service Automanaged Vm Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

