# ServiceAzureDevOps


```text
azure-11/Item/Devops/ServiceAzureDevOps
```

```text
include('azure-11/Item/Devops/ServiceAzureDevOps')
```



| Illustration | ServiceAzureDevOps | ServiceAzureDevOpsCard | ServiceAzureDevOpsGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure-11/Item/Devops/ServiceAzureDevOps.png) | ![illustration for ServiceAzureDevOps](../../../azure-11/Item/Devops/ServiceAzureDevOps.Local.png) | ![illustration for ServiceAzureDevOpsCard](../../../azure-11/Item/Devops/ServiceAzureDevOpsCard.Local.png) | ![illustration for ServiceAzureDevOpsGroup](../../../azure-11/Item/Devops/ServiceAzureDevOpsGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ServiceAzureDevOpsXs>`
- `<$ServiceAzureDevOpsSm>`
- `<$ServiceAzureDevOpsMd>`
- `<$ServiceAzureDevOpsLg>`





## ServiceAzureDevOps

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-11/bootstrap')

' loads the Item which embeds the element ServiceAzureDevOps
include('azure-11/Item/Devops/ServiceAzureDevOps')

' renders the element
ServiceAzureDevOps('ServiceAzureDevOps', 'Service Azure Dev Ops', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ServiceAzureDevOps
include('azure-11/Item/Devops/ServiceAzureDevOps')

' renders the element
ServiceAzureDevOps('ServiceAzureDevOps', 'Service Azure Dev Ops', 'an optional tech label', 'an optional description')
@enduml
```

## ServiceAzureDevOpsCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-11/bootstrap')

' loads the Item which embeds the element ServiceAzureDevOpsCard
include('azure-11/Item/Devops/ServiceAzureDevOps')

' renders the element
ServiceAzureDevOpsCard('ServiceAzureDevOpsCard', 'Service Azure Dev Ops Card', 'an optional description')
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

' loads the Item which embeds the element ServiceAzureDevOpsCard
include('azure-11/Item/Devops/ServiceAzureDevOps')

' renders the element
ServiceAzureDevOpsCard('ServiceAzureDevOpsCard', 'Service Azure Dev Ops Card', 'an optional description')
@enduml
```

## ServiceAzureDevOpsGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-11/bootstrap')

' loads the Item which embeds the element ServiceAzureDevOpsGroup
include('azure-11/Item/Devops/ServiceAzureDevOps')

' renders the element
ServiceAzureDevOpsGroup('ServiceAzureDevOpsGroup', 'Service Azure Dev Ops Group', 'an optional tech label') {
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

' loads the Item which embeds the element ServiceAzureDevOpsGroup
include('azure-11/Item/Devops/ServiceAzureDevOps')

' renders the element
ServiceAzureDevOpsGroup('ServiceAzureDevOpsGroup', 'Service Azure Dev Ops Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

