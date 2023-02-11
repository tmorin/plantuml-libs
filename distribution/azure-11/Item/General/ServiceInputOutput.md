# ServiceInputOutput


```text
azure-11/Item/General/ServiceInputOutput
```

```text
include('azure-11/Item/General/ServiceInputOutput')
```



| Illustration | ServiceInputOutput | ServiceInputOutputCard | ServiceInputOutputGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure-11/Item/General/ServiceInputOutput.png) | ![illustration for ServiceInputOutput](../../../azure-11/Item/General/ServiceInputOutput.Local.png) | ![illustration for ServiceInputOutputCard](../../../azure-11/Item/General/ServiceInputOutputCard.Local.png) | ![illustration for ServiceInputOutputGroup](../../../azure-11/Item/General/ServiceInputOutputGroup.Local.png) |




## ServiceInputOutput

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-11/bootstrap')

' loads the Item which embeds the element ServiceInputOutput
include('azure-11/Item/General/ServiceInputOutput')

' renders the element
ServiceInputOutput('ServiceInputOutput', 'Service Input Output', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ServiceInputOutput
include('azure-11/Item/General/ServiceInputOutput')

' renders the element
ServiceInputOutput('ServiceInputOutput', 'Service Input Output', 'an optional tech label', 'an optional description')
@enduml
```

## ServiceInputOutputCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-11/bootstrap')

' loads the Item which embeds the element ServiceInputOutputCard
include('azure-11/Item/General/ServiceInputOutput')

' renders the element
ServiceInputOutputCard('ServiceInputOutputCard', 'Service Input Output Card', 'an optional description')
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

' loads the Item which embeds the element ServiceInputOutputCard
include('azure-11/Item/General/ServiceInputOutput')

' renders the element
ServiceInputOutputCard('ServiceInputOutputCard', 'Service Input Output Card', 'an optional description')
@enduml
```

## ServiceInputOutputGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-11/bootstrap')

' loads the Item which embeds the element ServiceInputOutputGroup
include('azure-11/Item/General/ServiceInputOutput')

' renders the element
ServiceInputOutputGroup('ServiceInputOutputGroup', 'Service Input Output Group', 'an optional tech label') {
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

' loads the Item which embeds the element ServiceInputOutputGroup
include('azure-11/Item/General/ServiceInputOutput')

' renders the element
ServiceInputOutputGroup('ServiceInputOutputGroup', 'Service Input Output Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

