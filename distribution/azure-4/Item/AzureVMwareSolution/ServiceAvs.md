# ServiceAvs


```text
azure-4/Item/AzureVMwareSolution/ServiceAvs
```

```text
include('azure-4/Item/AzureVMwareSolution/ServiceAvs')
```



| Illustration | ServiceAvs | ServiceAvsCard | ServiceAvsGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure-4/Item/AzureVMwareSolution/ServiceAvs.png) | ![illustration for ServiceAvs](../../../azure-4/Item/AzureVMwareSolution/ServiceAvs.Local.png) | ![illustration for ServiceAvsCard](../../../azure-4/Item/AzureVMwareSolution/ServiceAvsCard.Local.png) | ![illustration for ServiceAvsGroup](../../../azure-4/Item/AzureVMwareSolution/ServiceAvsGroup.Local.png) |




## ServiceAvs

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceAvs
include('azure-4/Item/AzureVMwareSolution/ServiceAvs')

' renders the element
ServiceAvs('ServiceAvs', 'Service Avs', 'an optional tech label')
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

' loads the Item which embeds the element ServiceAvs
include('azure-4/Item/AzureVMwareSolution/ServiceAvs')

' renders the element
ServiceAvs('ServiceAvs', 'Service Avs', 'an optional tech label')
@enduml
```

## ServiceAvsCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceAvsCard
include('azure-4/Item/AzureVMwareSolution/ServiceAvs')

' renders the element
ServiceAvsCard('ServiceAvsCard', 'Service Avs Card', 'an optional description')
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

' loads the Item which embeds the element ServiceAvsCard
include('azure-4/Item/AzureVMwareSolution/ServiceAvs')

' renders the element
ServiceAvsCard('ServiceAvsCard', 'Service Avs Card', 'an optional description')
@enduml
```

## ServiceAvsGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceAvsGroup
include('azure-4/Item/AzureVMwareSolution/ServiceAvs')

' renders the element
ServiceAvsGroup('ServiceAvsGroup', 'Service Avs Group', 'an optional tech label') {
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

' loads the Item which embeds the element ServiceAvsGroup
include('azure-4/Item/AzureVMwareSolution/ServiceAvs')

' renders the element
ServiceAvsGroup('ServiceAvsGroup', 'Service Avs Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

