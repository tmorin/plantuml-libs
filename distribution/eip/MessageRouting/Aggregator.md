# Aggregator


```text
eip/MessageRouting/Aggregator
```

```text
include('eip/MessageRouting/Aggregator')
```



| Illustration | Aggregator | AggregatorGroup |
| :---: | :---: | :---: |
| ![illustration for Illustration](../../eip/MessageRouting/Aggregator.png) | ![illustration for Aggregator](../../eip/MessageRouting/Aggregator.Local.png) | ![illustration for AggregatorGroup](../../eip/MessageRouting/AggregatorGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AggregatorXs>`
- `<$AggregatorSm>`
- `<$AggregatorMd>`
- `<$AggregatorLg>`





## Aggregator

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('eip/bootstrap')

' loads the Item which embeds the element Aggregator
include('eip/MessageRouting/Aggregator')

' renders the element
Aggregator('Aggregator', 'Aggregator', 'an optional tech label', 'an optional description')
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
include('eip/bootstrap')

' loads the Item which embeds the element Aggregator
include('eip/MessageRouting/Aggregator')

' renders the element
Aggregator('Aggregator', 'Aggregator', 'an optional tech label', 'an optional description')
@enduml
```

## AggregatorGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('eip/bootstrap')

' loads the Item which embeds the element AggregatorGroup
include('eip/MessageRouting/Aggregator')

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
include('eip/bootstrap')

' loads the Item which embeds the element AggregatorGroup
include('eip/MessageRouting/Aggregator')

' renders the element
AggregatorGroup('AggregatorGroup', 'Aggregator Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

