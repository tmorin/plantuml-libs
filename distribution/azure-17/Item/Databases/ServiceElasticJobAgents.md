# ServiceElasticJobAgents


```text
azure-17/Item/Databases/ServiceElasticJobAgents
```

```text
include('azure-17/Item/Databases/ServiceElasticJobAgents')
```



| Illustration | ServiceElasticJobAgents | ServiceElasticJobAgentsCard | ServiceElasticJobAgentsGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure-17/Item/Databases/ServiceElasticJobAgents.png) | ![illustration for ServiceElasticJobAgents](../../../azure-17/Item/Databases/ServiceElasticJobAgents.Local.png) | ![illustration for ServiceElasticJobAgentsCard](../../../azure-17/Item/Databases/ServiceElasticJobAgentsCard.Local.png) | ![illustration for ServiceElasticJobAgentsGroup](../../../azure-17/Item/Databases/ServiceElasticJobAgentsGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ServiceElasticJobAgentsXs>`
- `<$ServiceElasticJobAgentsSm>`
- `<$ServiceElasticJobAgentsMd>`
- `<$ServiceElasticJobAgentsLg>`





## ServiceElasticJobAgents

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-17/bootstrap')

' loads the Item which embeds the element ServiceElasticJobAgents
include('azure-17/Item/Databases/ServiceElasticJobAgents')

' renders the element
ServiceElasticJobAgents('ServiceElasticJobAgents', 'Service Elastic Job Agents', 'an optional tech label', 'an optional description')
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
include('azure-17/bootstrap')

' loads the Item which embeds the element ServiceElasticJobAgents
include('azure-17/Item/Databases/ServiceElasticJobAgents')

' renders the element
ServiceElasticJobAgents('ServiceElasticJobAgents', 'Service Elastic Job Agents', 'an optional tech label', 'an optional description')
@enduml
```

## ServiceElasticJobAgentsCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-17/bootstrap')

' loads the Item which embeds the element ServiceElasticJobAgentsCard
include('azure-17/Item/Databases/ServiceElasticJobAgents')

' renders the element
ServiceElasticJobAgentsCard('ServiceElasticJobAgentsCard', 'Service Elastic Job Agents Card', 'an optional description')
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
include('azure-17/bootstrap')

' loads the Item which embeds the element ServiceElasticJobAgentsCard
include('azure-17/Item/Databases/ServiceElasticJobAgents')

' renders the element
ServiceElasticJobAgentsCard('ServiceElasticJobAgentsCard', 'Service Elastic Job Agents Card', 'an optional description')
@enduml
```

## ServiceElasticJobAgentsGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-17/bootstrap')

' loads the Item which embeds the element ServiceElasticJobAgentsGroup
include('azure-17/Item/Databases/ServiceElasticJobAgents')

' renders the element
ServiceElasticJobAgentsGroup('ServiceElasticJobAgentsGroup', 'Service Elastic Job Agents Group', 'an optional tech label') {
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
include('azure-17/bootstrap')

' loads the Item which embeds the element ServiceElasticJobAgentsGroup
include('azure-17/Item/Databases/ServiceElasticJobAgents')

' renders the element
ServiceElasticJobAgentsGroup('ServiceElasticJobAgentsGroup', 'Service Elastic Job Agents Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

