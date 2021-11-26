# ServiceGlobeWarning


```text
azure-4/Item/General/ServiceGlobeWarning
```

```text
include('azure-4/Item/General/ServiceGlobeWarning')
```



| Illustration | ServiceGlobeWarning | ServiceGlobeWarningCard | ServiceGlobeWarningGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure-4/Item/General/ServiceGlobeWarning.png) | ![illustration for ServiceGlobeWarning](../../../azure-4/Item/General/ServiceGlobeWarning.Local.png) | ![illustration for ServiceGlobeWarningCard](../../../azure-4/Item/General/ServiceGlobeWarningCard.Local.png) | ![illustration for ServiceGlobeWarningGroup](../../../azure-4/Item/General/ServiceGlobeWarningGroup.Local.png) |




## ServiceGlobeWarning

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceGlobeWarning
include('azure-4/Item/General/ServiceGlobeWarning')

' renders the element
ServiceGlobeWarning('ServiceGlobeWarning', 'Service Globe Warning', 'an optional tech label')
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

' loads the Item which embeds the element ServiceGlobeWarning
include('azure-4/Item/General/ServiceGlobeWarning')

' renders the element
ServiceGlobeWarning('ServiceGlobeWarning', 'Service Globe Warning', 'an optional tech label')
@enduml
```

## ServiceGlobeWarningCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceGlobeWarningCard
include('azure-4/Item/General/ServiceGlobeWarning')

' renders the element
ServiceGlobeWarningCard('ServiceGlobeWarningCard', 'Service Globe Warning Card', 'an optional description')
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

' loads the Item which embeds the element ServiceGlobeWarningCard
include('azure-4/Item/General/ServiceGlobeWarning')

' renders the element
ServiceGlobeWarningCard('ServiceGlobeWarningCard', 'Service Globe Warning Card', 'an optional description')
@enduml
```

## ServiceGlobeWarningGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceGlobeWarningGroup
include('azure-4/Item/General/ServiceGlobeWarning')

' renders the element
ServiceGlobeWarningGroup('ServiceGlobeWarningGroup', 'Service Globe Warning Group', 'an optional tech label') {
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

' loads the Item which embeds the element ServiceGlobeWarningGroup
include('azure-4/Item/General/ServiceGlobeWarning')

' renders the element
ServiceGlobeWarningGroup('ServiceGlobeWarningGroup', 'Service Globe Warning Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

