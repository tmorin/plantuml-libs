# ServiceScale


```text
azure-6/Item/General/ServiceScale
```

```text
include('azure-6/Item/General/ServiceScale')
```



| Illustration | ServiceScale | ServiceScaleCard | ServiceScaleGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure-6/Item/General/ServiceScale.png) | ![illustration for ServiceScale](../../../azure-6/Item/General/ServiceScale.Local.png) | ![illustration for ServiceScaleCard](../../../azure-6/Item/General/ServiceScaleCard.Local.png) | ![illustration for ServiceScaleGroup](../../../azure-6/Item/General/ServiceScaleGroup.Local.png) |




## ServiceScale

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-6/bootstrap')

' loads the Item which embeds the element ServiceScale
include('azure-6/Item/General/ServiceScale')

' renders the element
ServiceScale('ServiceScale', 'Service Scale', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ServiceScale
include('azure-6/Item/General/ServiceScale')

' renders the element
ServiceScale('ServiceScale', 'Service Scale', 'an optional tech label', 'an optional description')
@enduml
```

## ServiceScaleCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-6/bootstrap')

' loads the Item which embeds the element ServiceScaleCard
include('azure-6/Item/General/ServiceScale')

' renders the element
ServiceScaleCard('ServiceScaleCard', 'Service Scale Card', 'an optional description')
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

' loads the Item which embeds the element ServiceScaleCard
include('azure-6/Item/General/ServiceScale')

' renders the element
ServiceScaleCard('ServiceScaleCard', 'Service Scale Card', 'an optional description')
@enduml
```

## ServiceScaleGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-6/bootstrap')

' loads the Item which embeds the element ServiceScaleGroup
include('azure-6/Item/General/ServiceScale')

' renders the element
ServiceScaleGroup('ServiceScaleGroup', 'Service Scale Group', 'an optional tech label') {
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

' loads the Item which embeds the element ServiceScaleGroup
include('azure-6/Item/General/ServiceScale')

' renders the element
ServiceScaleGroup('ServiceScaleGroup', 'Service Scale Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

