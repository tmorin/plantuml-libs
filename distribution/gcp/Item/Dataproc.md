# Dataproc


```text
gcp/Item/Dataproc
```

```text
include('gcp/Item/Dataproc')
```



| Illustration | Dataproc | DataprocCard | DataprocGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../gcp/Item/Dataproc.png) | ![illustration for Dataproc](../../gcp/Item/Dataproc.Local.png) | ![illustration for DataprocCard](../../gcp/Item/DataprocCard.Local.png) | ![illustration for DataprocGroup](../../gcp/Item/DataprocGroup.Local.png) |




## Dataproc

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('gcp/bootstrap')

' loads the Item which embeds the element Dataproc
include('gcp/Item/Dataproc')

' renders the element
Dataproc('Dataproc', 'Dataproc', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Dataproc
include('gcp/Item/Dataproc')

' renders the element
Dataproc('Dataproc', 'Dataproc', 'an optional tech label', 'an optional description')
@enduml
```

## DataprocCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('gcp/bootstrap')

' loads the Item which embeds the element DataprocCard
include('gcp/Item/Dataproc')

' renders the element
DataprocCard('DataprocCard', 'Dataproc Card', 'an optional description')
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

' loads the Item which embeds the element DataprocCard
include('gcp/Item/Dataproc')

' renders the element
DataprocCard('DataprocCard', 'Dataproc Card', 'an optional description')
@enduml
```

## DataprocGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('gcp/bootstrap')

' loads the Item which embeds the element DataprocGroup
include('gcp/Item/Dataproc')

' renders the element
DataprocGroup('DataprocGroup', 'Dataproc Group', 'an optional tech label') {
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

' loads the Item which embeds the element DataprocGroup
include('gcp/Item/Dataproc')

' renders the element
DataprocGroup('DataprocGroup', 'Dataproc Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

