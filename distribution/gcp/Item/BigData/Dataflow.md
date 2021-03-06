# Dataflow


```text
gcp/Item/BigData/Dataflow
```

```text
include('gcp/Item/BigData/Dataflow')
```



| Illustration | Dataflow | DataflowCard | DataflowGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../gcp/Item/BigData/Dataflow.png) | ![illustration for Dataflow](../../../gcp/Item/BigData/Dataflow.Local.png) | ![illustration for DataflowCard](../../../gcp/Item/BigData/DataflowCard.Local.png) | ![illustration for DataflowGroup](../../../gcp/Item/BigData/DataflowGroup.Local.png) |




## Dataflow

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('gcp/bootstrap')

' loads the Item which embeds the element Dataflow
include('gcp/Item/BigData/Dataflow')

' renders the element
Dataflow('Dataflow', 'Dataflow', 'an optional tech label')
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
include('gcp/bootstrap')

' loads the Item which embeds the element Dataflow
include('gcp/Item/BigData/Dataflow')

' renders the element
Dataflow('Dataflow', 'Dataflow', 'an optional tech label')
@enduml
```

## DataflowCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('gcp/bootstrap')

' loads the Item which embeds the element DataflowCard
include('gcp/Item/BigData/Dataflow')

' renders the element
DataflowCard('DataflowCard', 'Dataflow Card', 'an optional description')
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
include('gcp/bootstrap')

' loads the Item which embeds the element DataflowCard
include('gcp/Item/BigData/Dataflow')

' renders the element
DataflowCard('DataflowCard', 'Dataflow Card', 'an optional description')
@enduml
```

## DataflowGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('gcp/bootstrap')

' loads the Item which embeds the element DataflowGroup
include('gcp/Item/BigData/Dataflow')

' renders the element
DataflowGroup('DataflowGroup', 'Dataflow Group', 'an optional tech label') {
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
include('gcp/bootstrap')

' loads the Item which embeds the element DataflowGroup
include('gcp/Item/BigData/Dataflow')

' renders the element
DataflowGroup('DataflowGroup', 'Dataflow Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

