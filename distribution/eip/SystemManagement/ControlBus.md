# ControlBus


```text
eip/SystemManagement/ControlBus
```

```text
include('eip/SystemManagement/ControlBus')
```



| Illustration | ControlBus | ControlBusGroup |
| :---: | :---: | :---: |
| ![illustration for Illustration](../../eip/SystemManagement/ControlBus.png) | ![illustration for ControlBus](../../eip/SystemManagement/ControlBus.Local.png) | ![illustration for ControlBusGroup](../../eip/SystemManagement/ControlBusGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ControlBusXs>`
- `<$ControlBusSm>`
- `<$ControlBusMd>`
- `<$ControlBusLg>`





## ControlBus

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('eip/bootstrap')

' loads the Item which embeds the element ControlBus
include('eip/SystemManagement/ControlBus')

' renders the element
ControlBus('ControlBus', 'Control Bus', 'an optional tech label', 'an optional description')
@enduml
```

### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('eip/bootstrap')

' loads the Item which embeds the element ControlBus
include('eip/SystemManagement/ControlBus')

' renders the element
ControlBus('ControlBus', 'Control Bus', 'an optional tech label', 'an optional description')
@enduml
```

## ControlBusGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('eip/bootstrap')

' loads the Item which embeds the element ControlBusGroup
include('eip/SystemManagement/ControlBus')

' renders the element
ControlBusGroup('ControlBusGroup', 'Control Bus Group', 'an optional tech label') {
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
!global $LIB_BASE_LOCATION="../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('eip/bootstrap')

' loads the Item which embeds the element ControlBusGroup
include('eip/SystemManagement/ControlBus')

' renders the element
ControlBusGroup('ControlBusGroup', 'Control Bus Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

