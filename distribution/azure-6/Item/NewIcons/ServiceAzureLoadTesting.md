# ServiceAzureLoadTesting


```text
azure-6/Item/NewIcons/ServiceAzureLoadTesting
```

```text
include('azure-6/Item/NewIcons/ServiceAzureLoadTesting')
```



| Illustration | ServiceAzureLoadTesting | ServiceAzureLoadTestingCard | ServiceAzureLoadTestingGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure-6/Item/NewIcons/ServiceAzureLoadTesting.png) | ![illustration for ServiceAzureLoadTesting](../../../azure-6/Item/NewIcons/ServiceAzureLoadTesting.Local.png) | ![illustration for ServiceAzureLoadTestingCard](../../../azure-6/Item/NewIcons/ServiceAzureLoadTestingCard.Local.png) | ![illustration for ServiceAzureLoadTestingGroup](../../../azure-6/Item/NewIcons/ServiceAzureLoadTestingGroup.Local.png) |




## ServiceAzureLoadTesting

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-6/bootstrap')

' loads the Item which embeds the element ServiceAzureLoadTesting
include('azure-6/Item/NewIcons/ServiceAzureLoadTesting')

' renders the element
ServiceAzureLoadTesting('ServiceAzureLoadTesting', 'Service Azure Load Testing', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ServiceAzureLoadTesting
include('azure-6/Item/NewIcons/ServiceAzureLoadTesting')

' renders the element
ServiceAzureLoadTesting('ServiceAzureLoadTesting', 'Service Azure Load Testing', 'an optional tech label', 'an optional description')
@enduml
```

## ServiceAzureLoadTestingCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-6/bootstrap')

' loads the Item which embeds the element ServiceAzureLoadTestingCard
include('azure-6/Item/NewIcons/ServiceAzureLoadTesting')

' renders the element
ServiceAzureLoadTestingCard('ServiceAzureLoadTestingCard', 'Service Azure Load Testing Card', 'an optional description')
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

' loads the Item which embeds the element ServiceAzureLoadTestingCard
include('azure-6/Item/NewIcons/ServiceAzureLoadTesting')

' renders the element
ServiceAzureLoadTestingCard('ServiceAzureLoadTestingCard', 'Service Azure Load Testing Card', 'an optional description')
@enduml
```

## ServiceAzureLoadTestingGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-6/bootstrap')

' loads the Item which embeds the element ServiceAzureLoadTestingGroup
include('azure-6/Item/NewIcons/ServiceAzureLoadTesting')

' renders the element
ServiceAzureLoadTestingGroup('ServiceAzureLoadTestingGroup', 'Service Azure Load Testing Group', 'an optional tech label') {
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

' loads the Item which embeds the element ServiceAzureLoadTestingGroup
include('azure-6/Item/NewIcons/ServiceAzureLoadTesting')

' renders the element
ServiceAzureLoadTestingGroup('ServiceAzureLoadTestingGroup', 'Service Azure Load Testing Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

