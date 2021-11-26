# ServiceCounter


```text
azure-4/Item/General/ServiceCounter
```

```text
include('azure-4/Item/General/ServiceCounter')
```



| Illustration | ServiceCounter | ServiceCounterCard | ServiceCounterGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure-4/Item/General/ServiceCounter.png) | ![illustration for ServiceCounter](../../../azure-4/Item/General/ServiceCounter.Local.png) | ![illustration for ServiceCounterCard](../../../azure-4/Item/General/ServiceCounterCard.Local.png) | ![illustration for ServiceCounterGroup](../../../azure-4/Item/General/ServiceCounterGroup.Local.png) |




## ServiceCounter

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceCounter
include('azure-4/Item/General/ServiceCounter')

' renders the element
ServiceCounter('ServiceCounter', 'Service Counter', 'an optional tech label')
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

' loads the Item which embeds the element ServiceCounter
include('azure-4/Item/General/ServiceCounter')

' renders the element
ServiceCounter('ServiceCounter', 'Service Counter', 'an optional tech label')
@enduml
```

## ServiceCounterCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceCounterCard
include('azure-4/Item/General/ServiceCounter')

' renders the element
ServiceCounterCard('ServiceCounterCard', 'Service Counter Card', 'an optional description')
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

' loads the Item which embeds the element ServiceCounterCard
include('azure-4/Item/General/ServiceCounter')

' renders the element
ServiceCounterCard('ServiceCounterCard', 'Service Counter Card', 'an optional description')
@enduml
```

## ServiceCounterGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceCounterGroup
include('azure-4/Item/General/ServiceCounter')

' renders the element
ServiceCounterGroup('ServiceCounterGroup', 'Service Counter Group', 'an optional tech label') {
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

' loads the Item which embeds the element ServiceCounterGroup
include('azure-4/Item/General/ServiceCounter')

' renders the element
ServiceCounterGroup('ServiceCounterGroup', 'Service Counter Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

