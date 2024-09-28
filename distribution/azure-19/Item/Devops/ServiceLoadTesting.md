# ServiceLoadTesting


```text
azure-19/Item/Devops/ServiceLoadTesting
```

```text
include('azure-19/Item/Devops/ServiceLoadTesting')
```



| Illustration | ServiceLoadTesting | ServiceLoadTestingCard | ServiceLoadTestingGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure-19/Item/Devops/ServiceLoadTesting.png) | ![illustration for ServiceLoadTesting](../../../azure-19/Item/Devops/ServiceLoadTesting.Local.png) | ![illustration for ServiceLoadTestingCard](../../../azure-19/Item/Devops/ServiceLoadTestingCard.Local.png) | ![illustration for ServiceLoadTestingGroup](../../../azure-19/Item/Devops/ServiceLoadTestingGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ServiceLoadTestingXs>`
- `<$ServiceLoadTestingSm>`
- `<$ServiceLoadTestingMd>`
- `<$ServiceLoadTestingLg>`





## ServiceLoadTesting

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-19/bootstrap')

' loads the Item which embeds the element ServiceLoadTesting
include('azure-19/Item/Devops/ServiceLoadTesting')

' renders the element
ServiceLoadTesting('ServiceLoadTesting', 'Service Load Testing', 'an optional tech label', 'an optional description')
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
include('azure-19/bootstrap')

' loads the Item which embeds the element ServiceLoadTesting
include('azure-19/Item/Devops/ServiceLoadTesting')

' renders the element
ServiceLoadTesting('ServiceLoadTesting', 'Service Load Testing', 'an optional tech label', 'an optional description')
@enduml
```

## ServiceLoadTestingCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-19/bootstrap')

' loads the Item which embeds the element ServiceLoadTestingCard
include('azure-19/Item/Devops/ServiceLoadTesting')

' renders the element
ServiceLoadTestingCard('ServiceLoadTestingCard', 'Service Load Testing Card', 'an optional description')
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
include('azure-19/bootstrap')

' loads the Item which embeds the element ServiceLoadTestingCard
include('azure-19/Item/Devops/ServiceLoadTesting')

' renders the element
ServiceLoadTestingCard('ServiceLoadTestingCard', 'Service Load Testing Card', 'an optional description')
@enduml
```

## ServiceLoadTestingGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-19/bootstrap')

' loads the Item which embeds the element ServiceLoadTestingGroup
include('azure-19/Item/Devops/ServiceLoadTesting')

' renders the element
ServiceLoadTestingGroup('ServiceLoadTestingGroup', 'Service Load Testing Group', 'an optional tech label') {
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
include('azure-19/bootstrap')

' loads the Item which embeds the element ServiceLoadTestingGroup
include('azure-19/Item/Devops/ServiceLoadTesting')

' renders the element
ServiceLoadTestingGroup('ServiceLoadTestingGroup', 'Service Load Testing Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

