# Trace


```text
gcp/Item/Trace
```

```text
include('gcp/Item/Trace')
```



| Illustration | Trace | TraceCard | TraceGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../gcp/Item/Trace.png) | ![illustration for Trace](../../gcp/Item/Trace.Local.png) | ![illustration for TraceCard](../../gcp/Item/TraceCard.Local.png) | ![illustration for TraceGroup](../../gcp/Item/TraceGroup.Local.png) |




## Trace

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('gcp/bootstrap')

' loads the Item which embeds the element Trace
include('gcp/Item/Trace')

' renders the element
Trace('Trace', 'Trace', 'an optional tech label')
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

' loads the Item which embeds the element Trace
include('gcp/Item/Trace')

' renders the element
Trace('Trace', 'Trace', 'an optional tech label')
@enduml
```

## TraceCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('gcp/bootstrap')

' loads the Item which embeds the element TraceCard
include('gcp/Item/Trace')

' renders the element
TraceCard('TraceCard', 'Trace Card', 'an optional description')
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

' loads the Item which embeds the element TraceCard
include('gcp/Item/Trace')

' renders the element
TraceCard('TraceCard', 'Trace Card', 'an optional description')
@enduml
```

## TraceGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('gcp/bootstrap')

' loads the Item which embeds the element TraceGroup
include('gcp/Item/Trace')

' renders the element
TraceGroup('TraceGroup', 'Trace Group', 'an optional tech label') {
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

' loads the Item which embeds the element TraceGroup
include('gcp/Item/Trace')

' renders the element
TraceGroup('TraceGroup', 'Trace Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

