# ServiceAdvisor


```text
azure/Item/ManagementGovernance/ServiceAdvisor
```

```text
include('azure/Item/ManagementGovernance/ServiceAdvisor')
```



| Illustration | ServiceAdvisor | ServiceAdvisorCard | ServiceAdvisorGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure/Item/ManagementGovernance/ServiceAdvisor.png) | ![illustration for ServiceAdvisor](../../../azure/Item/ManagementGovernance/ServiceAdvisor.Local.png) | ![illustration for ServiceAdvisorCard](../../../azure/Item/ManagementGovernance/ServiceAdvisorCard.Local.png) | ![illustration for ServiceAdvisorGroup](../../../azure/Item/ManagementGovernance/ServiceAdvisorGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ServiceAdvisorXs>`
- `<$ServiceAdvisorSm>`
- `<$ServiceAdvisorMd>`
- `<$ServiceAdvisorLg>`





## ServiceAdvisor

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure/bootstrap')

' loads the Item which embeds the element ServiceAdvisor
include('azure/Item/ManagementGovernance/ServiceAdvisor')

' renders the element
ServiceAdvisor('ServiceAdvisor', 'Service Advisor', 'an optional tech label', 'an optional description')
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
include('azure/bootstrap')

' loads the Item which embeds the element ServiceAdvisor
include('azure/Item/ManagementGovernance/ServiceAdvisor')

' renders the element
ServiceAdvisor('ServiceAdvisor', 'Service Advisor', 'an optional tech label', 'an optional description')
@enduml
```

## ServiceAdvisorCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure/bootstrap')

' loads the Item which embeds the element ServiceAdvisorCard
include('azure/Item/ManagementGovernance/ServiceAdvisor')

' renders the element
ServiceAdvisorCard('ServiceAdvisorCard', 'Service Advisor Card', 'an optional description')
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
include('azure/bootstrap')

' loads the Item which embeds the element ServiceAdvisorCard
include('azure/Item/ManagementGovernance/ServiceAdvisor')

' renders the element
ServiceAdvisorCard('ServiceAdvisorCard', 'Service Advisor Card', 'an optional description')
@enduml
```

## ServiceAdvisorGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure/bootstrap')

' loads the Item which embeds the element ServiceAdvisorGroup
include('azure/Item/ManagementGovernance/ServiceAdvisor')

' renders the element
ServiceAdvisorGroup('ServiceAdvisorGroup', 'Service Advisor Group', 'an optional tech label') {
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
include('azure/bootstrap')

' loads the Item which embeds the element ServiceAdvisorGroup
include('azure/Item/ManagementGovernance/ServiceAdvisor')

' renders the element
ServiceAdvisorGroup('ServiceAdvisorGroup', 'Service Advisor Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

