# ServiceAzureSentinel


```text
azure-4/Item/Security/ServiceAzureSentinel
```

```text
include('azure-4/Item/Security/ServiceAzureSentinel')
```



| Illustration | ServiceAzureSentinel | ServiceAzureSentinelCard | ServiceAzureSentinelGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure-4/Item/Security/ServiceAzureSentinel.png) | ![illustration for ServiceAzureSentinel](../../../azure-4/Item/Security/ServiceAzureSentinel.Local.png) | ![illustration for ServiceAzureSentinelCard](../../../azure-4/Item/Security/ServiceAzureSentinelCard.Local.png) | ![illustration for ServiceAzureSentinelGroup](../../../azure-4/Item/Security/ServiceAzureSentinelGroup.Local.png) |




## ServiceAzureSentinel

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceAzureSentinel
include('azure-4/Item/Security/ServiceAzureSentinel')

' renders the element
ServiceAzureSentinel('ServiceAzureSentinel', 'Service Azure Sentinel', 'an optional tech label')
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

' loads the Item which embeds the element ServiceAzureSentinel
include('azure-4/Item/Security/ServiceAzureSentinel')

' renders the element
ServiceAzureSentinel('ServiceAzureSentinel', 'Service Azure Sentinel', 'an optional tech label')
@enduml
```

## ServiceAzureSentinelCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceAzureSentinelCard
include('azure-4/Item/Security/ServiceAzureSentinel')

' renders the element
ServiceAzureSentinelCard('ServiceAzureSentinelCard', 'Service Azure Sentinel Card', 'an optional description')
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

' loads the Item which embeds the element ServiceAzureSentinelCard
include('azure-4/Item/Security/ServiceAzureSentinel')

' renders the element
ServiceAzureSentinelCard('ServiceAzureSentinelCard', 'Service Azure Sentinel Card', 'an optional description')
@enduml
```

## ServiceAzureSentinelGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceAzureSentinelGroup
include('azure-4/Item/Security/ServiceAzureSentinel')

' renders the element
ServiceAzureSentinelGroup('ServiceAzureSentinelGroup', 'Service Azure Sentinel Group', 'an optional tech label') {
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

' loads the Item which embeds the element ServiceAzureSentinelGroup
include('azure-4/Item/Security/ServiceAzureSentinel')

' renders the element
ServiceAzureSentinelGroup('ServiceAzureSentinelGroup', 'Service Azure Sentinel Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

