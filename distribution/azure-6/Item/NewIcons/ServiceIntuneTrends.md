# ServiceIntuneTrends


```text
azure-6/Item/NewIcons/ServiceIntuneTrends
```

```text
include('azure-6/Item/NewIcons/ServiceIntuneTrends')
```



| Illustration | ServiceIntuneTrends | ServiceIntuneTrendsCard | ServiceIntuneTrendsGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure-6/Item/NewIcons/ServiceIntuneTrends.png) | ![illustration for ServiceIntuneTrends](../../../azure-6/Item/NewIcons/ServiceIntuneTrends.Local.png) | ![illustration for ServiceIntuneTrendsCard](../../../azure-6/Item/NewIcons/ServiceIntuneTrendsCard.Local.png) | ![illustration for ServiceIntuneTrendsGroup](../../../azure-6/Item/NewIcons/ServiceIntuneTrendsGroup.Local.png) |




## ServiceIntuneTrends

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-6/bootstrap')

' loads the Item which embeds the element ServiceIntuneTrends
include('azure-6/Item/NewIcons/ServiceIntuneTrends')

' renders the element
ServiceIntuneTrends('ServiceIntuneTrends', 'Service Intune Trends', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ServiceIntuneTrends
include('azure-6/Item/NewIcons/ServiceIntuneTrends')

' renders the element
ServiceIntuneTrends('ServiceIntuneTrends', 'Service Intune Trends', 'an optional tech label', 'an optional description')
@enduml
```

## ServiceIntuneTrendsCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-6/bootstrap')

' loads the Item which embeds the element ServiceIntuneTrendsCard
include('azure-6/Item/NewIcons/ServiceIntuneTrends')

' renders the element
ServiceIntuneTrendsCard('ServiceIntuneTrendsCard', 'Service Intune Trends Card', 'an optional description')
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

' loads the Item which embeds the element ServiceIntuneTrendsCard
include('azure-6/Item/NewIcons/ServiceIntuneTrends')

' renders the element
ServiceIntuneTrendsCard('ServiceIntuneTrendsCard', 'Service Intune Trends Card', 'an optional description')
@enduml
```

## ServiceIntuneTrendsGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-6/bootstrap')

' loads the Item which embeds the element ServiceIntuneTrendsGroup
include('azure-6/Item/NewIcons/ServiceIntuneTrends')

' renders the element
ServiceIntuneTrendsGroup('ServiceIntuneTrendsGroup', 'Service Intune Trends Group', 'an optional tech label') {
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

' loads the Item which embeds the element ServiceIntuneTrendsGroup
include('azure-6/Item/NewIcons/ServiceIntuneTrends')

' renders the element
ServiceIntuneTrendsGroup('ServiceIntuneTrendsGroup', 'Service Intune Trends Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

