# ServiceDataBox


```text
azure-4/Item/Storage/ServiceDataBox
```

```text
include('azure-4/Item/Storage/ServiceDataBox')
```



| Illustration | ServiceDataBox | ServiceDataBoxCard | ServiceDataBoxGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure-4/Item/Storage/ServiceDataBox.png) | ![illustration for ServiceDataBox](../../../azure-4/Item/Storage/ServiceDataBox.Local.png) | ![illustration for ServiceDataBoxCard](../../../azure-4/Item/Storage/ServiceDataBoxCard.Local.png) | ![illustration for ServiceDataBoxGroup](../../../azure-4/Item/Storage/ServiceDataBoxGroup.Local.png) |




## ServiceDataBox

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceDataBox
include('azure-4/Item/Storage/ServiceDataBox')

' renders the element
ServiceDataBox('ServiceDataBox', 'Service Data Box', 'an optional tech label')
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

' loads the Item which embeds the element ServiceDataBox
include('azure-4/Item/Storage/ServiceDataBox')

' renders the element
ServiceDataBox('ServiceDataBox', 'Service Data Box', 'an optional tech label')
@enduml
```

## ServiceDataBoxCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceDataBoxCard
include('azure-4/Item/Storage/ServiceDataBox')

' renders the element
ServiceDataBoxCard('ServiceDataBoxCard', 'Service Data Box Card', 'an optional description')
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

' loads the Item which embeds the element ServiceDataBoxCard
include('azure-4/Item/Storage/ServiceDataBox')

' renders the element
ServiceDataBoxCard('ServiceDataBoxCard', 'Service Data Box Card', 'an optional description')
@enduml
```

## ServiceDataBoxGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceDataBoxGroup
include('azure-4/Item/Storage/ServiceDataBox')

' renders the element
ServiceDataBoxGroup('ServiceDataBoxGroup', 'Service Data Box Group', 'an optional tech label') {
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

' loads the Item which embeds the element ServiceDataBoxGroup
include('azure-4/Item/Storage/ServiceDataBox')

' renders the element
ServiceDataBoxGroup('ServiceDataBoxGroup', 'Service Data Box Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

