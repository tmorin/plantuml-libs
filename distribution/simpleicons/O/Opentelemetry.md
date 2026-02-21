# Opentelemetry


```text
simpleicons/O/Opentelemetry
```

```text
include('simpleicons/O/Opentelemetry')
```



| Illustration | Opentelemetry |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/O/Opentelemetry.png) | ![illustration for Opentelemetry](../../simpleicons/O/Opentelemetry.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$OpentelemetryXs>`
- `<$OpentelemetrySm>`
- `<$OpentelemetryMd>`
- `<$OpentelemetryLg>`





## Opentelemetry

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Opentelemetry
include('simpleicons/O/Opentelemetry')

' renders the element
Opentelemetry('Opentelemetry', 'Opentelemetry', 'an optional tech label', 'an optional description')
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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Opentelemetry
include('simpleicons/O/Opentelemetry')

' renders the element
Opentelemetry('Opentelemetry', 'Opentelemetry', 'an optional tech label', 'an optional description')
@enduml
```

