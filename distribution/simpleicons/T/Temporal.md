# Temporal


```text
simpleicons/T/Temporal
```

```text
include('simpleicons/T/Temporal')
```



| Illustration | Temporal |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/T/Temporal.png) | ![illustration for Temporal](../../simpleicons/T/Temporal.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TemporalXs>`
- `<$TemporalSm>`
- `<$TemporalMd>`
- `<$TemporalLg>`





## Temporal

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Temporal
include('simpleicons/T/Temporal')

' renders the element
Temporal('Temporal', 'Temporal', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Temporal
include('simpleicons/T/Temporal')

' renders the element
Temporal('Temporal', 'Temporal', 'an optional tech label', 'an optional description')
@enduml
```

