# Opentelemetry


```text
simpleicons-8/O/Opentelemetry
```

```text
include('simpleicons-8/O/Opentelemetry')
```



| Illustration | Opentelemetry |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/O/Opentelemetry.png) | ![illustration for Opentelemetry](../../simpleicons-8/O/Opentelemetry.Local.png) |



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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Opentelemetry
include('simpleicons-8/O/Opentelemetry')

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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Opentelemetry
include('simpleicons-8/O/Opentelemetry')

' renders the element
Opentelemetry('Opentelemetry', 'Opentelemetry', 'an optional tech label', 'an optional description')
@enduml
```

