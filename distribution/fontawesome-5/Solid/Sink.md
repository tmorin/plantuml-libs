# Sink


```text
fontawesome-5/Solid/Sink
```

```text
include('fontawesome-5/Solid/Sink')
```



| Illustration | Sink |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Sink.png) | ![illustration for Sink](../../fontawesome-5/Solid/Sink.Local.png) |




## Sink

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Sink
include('fontawesome-5/Solid/Sink')

' renders the element
Sink('Sink', 'Sink', 'an optional tech label')
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
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Sink
include('fontawesome-5/Solid/Sink')

' renders the element
Sink('Sink', 'Sink', 'an optional tech label')
@enduml
```

