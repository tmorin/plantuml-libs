# ServiceRtos


```text
azure-11/Item/Other/ServiceRtos
```

```text
include('azure-11/Item/Other/ServiceRtos')
```



| Illustration | ServiceRtos | ServiceRtosCard | ServiceRtosGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure-11/Item/Other/ServiceRtos.png) | ![illustration for ServiceRtos](../../../azure-11/Item/Other/ServiceRtos.Local.png) | ![illustration for ServiceRtosCard](../../../azure-11/Item/Other/ServiceRtosCard.Local.png) | ![illustration for ServiceRtosGroup](../../../azure-11/Item/Other/ServiceRtosGroup.Local.png) |




## ServiceRtos

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-11/bootstrap')

' loads the Item which embeds the element ServiceRtos
include('azure-11/Item/Other/ServiceRtos')

' renders the element
ServiceRtos('ServiceRtos', 'Service Rtos', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ServiceRtos
include('azure-11/Item/Other/ServiceRtos')

' renders the element
ServiceRtos('ServiceRtos', 'Service Rtos', 'an optional tech label', 'an optional description')
@enduml
```

## ServiceRtosCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-11/bootstrap')

' loads the Item which embeds the element ServiceRtosCard
include('azure-11/Item/Other/ServiceRtos')

' renders the element
ServiceRtosCard('ServiceRtosCard', 'Service Rtos Card', 'an optional description')
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

' loads the Item which embeds the element ServiceRtosCard
include('azure-11/Item/Other/ServiceRtos')

' renders the element
ServiceRtosCard('ServiceRtosCard', 'Service Rtos Card', 'an optional description')
@enduml
```

## ServiceRtosGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-11/bootstrap')

' loads the Item which embeds the element ServiceRtosGroup
include('azure-11/Item/Other/ServiceRtos')

' renders the element
ServiceRtosGroup('ServiceRtosGroup', 'Service Rtos Group', 'an optional tech label') {
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

' loads the Item which embeds the element ServiceRtosGroup
include('azure-11/Item/Other/ServiceRtos')

' renders the element
ServiceRtosGroup('ServiceRtosGroup', 'Service Rtos Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

