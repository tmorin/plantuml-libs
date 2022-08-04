# Datastream


```text
gcp/Item/Datastream
```

```text
include('gcp/Item/Datastream')
```



| Illustration | Datastream | DatastreamCard | DatastreamGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../gcp/Item/Datastream.png) | ![illustration for Datastream](../../gcp/Item/Datastream.Local.png) | ![illustration for DatastreamCard](../../gcp/Item/DatastreamCard.Local.png) | ![illustration for DatastreamGroup](../../gcp/Item/DatastreamGroup.Local.png) |




## Datastream

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('gcp/bootstrap')

' loads the Item which embeds the element Datastream
include('gcp/Item/Datastream')

' renders the element
Datastream('Datastream', 'Datastream', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Datastream
include('gcp/Item/Datastream')

' renders the element
Datastream('Datastream', 'Datastream', 'an optional tech label', 'an optional description')
@enduml
```

## DatastreamCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('gcp/bootstrap')

' loads the Item which embeds the element DatastreamCard
include('gcp/Item/Datastream')

' renders the element
DatastreamCard('DatastreamCard', 'Datastream Card', 'an optional description')
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

' loads the Item which embeds the element DatastreamCard
include('gcp/Item/Datastream')

' renders the element
DatastreamCard('DatastreamCard', 'Datastream Card', 'an optional description')
@enduml
```

## DatastreamGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('gcp/bootstrap')

' loads the Item which embeds the element DatastreamGroup
include('gcp/Item/Datastream')

' renders the element
DatastreamGroup('DatastreamGroup', 'Datastream Group', 'an optional tech label') {
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

' loads the Item which embeds the element DatastreamGroup
include('gcp/Item/Datastream')

' renders the element
DatastreamGroup('DatastreamGroup', 'Datastream Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

