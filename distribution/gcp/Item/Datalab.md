# Datalab


```text
gcp/Item/Datalab
```

```text
include('gcp/Item/Datalab')
```



| Illustration | Datalab | DatalabCard | DatalabGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../gcp/Item/Datalab.png) | ![illustration for Datalab](../../gcp/Item/Datalab.Local.png) | ![illustration for DatalabCard](../../gcp/Item/DatalabCard.Local.png) | ![illustration for DatalabGroup](../../gcp/Item/DatalabGroup.Local.png) |




## Datalab

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('gcp/bootstrap')

' loads the Item which embeds the element Datalab
include('gcp/Item/Datalab')

' renders the element
Datalab('Datalab', 'Datalab', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Datalab
include('gcp/Item/Datalab')

' renders the element
Datalab('Datalab', 'Datalab', 'an optional tech label', 'an optional description')
@enduml
```

## DatalabCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('gcp/bootstrap')

' loads the Item which embeds the element DatalabCard
include('gcp/Item/Datalab')

' renders the element
DatalabCard('DatalabCard', 'Datalab Card', 'an optional description')
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

' loads the Item which embeds the element DatalabCard
include('gcp/Item/Datalab')

' renders the element
DatalabCard('DatalabCard', 'Datalab Card', 'an optional description')
@enduml
```

## DatalabGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('gcp/bootstrap')

' loads the Item which embeds the element DatalabGroup
include('gcp/Item/Datalab')

' renders the element
DatalabGroup('DatalabGroup', 'Datalab Group', 'an optional tech label') {
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

' loads the Item which embeds the element DatalabGroup
include('gcp/Item/Datalab')

' renders the element
DatalabGroup('DatalabGroup', 'Datalab Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

