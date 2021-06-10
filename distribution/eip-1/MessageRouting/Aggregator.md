# Aggregator


```text
eip-1/MessageRouting/Aggregator
```

```text
include('eip-1/MessageRouting/Aggregator')
```



| Illustration | Aggregator | AggregatorGroup |
| :---: | :---: | :---: |
| ![illustration for Illustration](../../eip-1/MessageRouting/Aggregator.png) | ![illustration for Aggregator](../../eip-1/MessageRouting/Aggregator.Local.png) | ![illustration for AggregatorGroup](../../eip-1/MessageRouting/AggregatorGroup.Local.png) |




## Aggregator

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('eip-1/bootstrap')

' loads the Item which embeds the element Aggregator
include('eip-1/MessageRouting/Aggregator')

' renders the element
Aggregator('Aggregator', 'Aggregator', 'an optional tech label')
@enduml
```

### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('eip-1/bootstrap')

' loads the Item which embeds the element Aggregator
include('eip-1/MessageRouting/Aggregator')

' renders the element
Aggregator('Aggregator', 'Aggregator', 'an optional tech label')
@enduml
```

## AggregatorGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('eip-1/bootstrap')

' loads the Item which embeds the element AggregatorGroup
include('eip-1/MessageRouting/Aggregator')

' renders the element
AggregatorGroup('AggregatorGroup', 'Aggregator Group', 'an optional tech label') {
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
!global $LIB_BASE_LOCATION="../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('eip-1/bootstrap')

' loads the Item which embeds the element AggregatorGroup
include('eip-1/MessageRouting/Aggregator')

' renders the element
AggregatorGroup('AggregatorGroup', 'Aggregator Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

