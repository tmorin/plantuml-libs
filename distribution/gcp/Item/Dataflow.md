# Dataflow


```text
gcp/Item/Dataflow
```

```text
include('gcp/Item/Dataflow')
```



| Illustration | Dataflow | DataflowCard | DataflowGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../gcp/Item/Dataflow.png) | ![illustration for Dataflow](../../gcp/Item/Dataflow.Local.png) | ![illustration for DataflowCard](../../gcp/Item/DataflowCard.Local.png) | ![illustration for DataflowGroup](../../gcp/Item/DataflowGroup.Local.png) |




## Dataflow

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('gcp/bootstrap')

' loads the Item which embeds the element Dataflow
include('gcp/Item/Dataflow')

' renders the element
Dataflow('Dataflow', 'Dataflow', 'an optional tech label', 'an optional description')
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
include('gcp/bootstrap')

' loads the Item which embeds the element Dataflow
include('gcp/Item/Dataflow')

' renders the element
Dataflow('Dataflow', 'Dataflow', 'an optional tech label', 'an optional description')
@enduml
```

## DataflowCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('gcp/bootstrap')

' loads the Item which embeds the element DataflowCard
include('gcp/Item/Dataflow')

' renders the element
DataflowCard('DataflowCard', 'Dataflow Card', 'an optional description')
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
include('gcp/bootstrap')

' loads the Item which embeds the element DataflowCard
include('gcp/Item/Dataflow')

' renders the element
DataflowCard('DataflowCard', 'Dataflow Card', 'an optional description')
@enduml
```

## DataflowGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('gcp/bootstrap')

' loads the Item which embeds the element DataflowGroup
include('gcp/Item/Dataflow')

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
!global $LIB_BASE_LOCATION="../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('gcp/bootstrap')

' loads the Item which embeds the element DataflowGroup
include('gcp/Item/Dataflow')

' renders the element
DataflowGroup('DataflowGroup', 'Dataflow Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

