# Baremetrics


```text
simpleicons/B/Baremetrics
```

```text
include('simpleicons/B/Baremetrics')
```



| Illustration | Baremetrics |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/B/Baremetrics.png) | ![illustration for Baremetrics](../../simpleicons/B/Baremetrics.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BaremetricsXs>`
- `<$BaremetricsSm>`
- `<$BaremetricsMd>`
- `<$BaremetricsLg>`





## Baremetrics

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Baremetrics
include('simpleicons/B/Baremetrics')

' renders the element
Baremetrics('Baremetrics', 'Baremetrics', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Baremetrics
include('simpleicons/B/Baremetrics')

' renders the element
Baremetrics('Baremetrics', 'Baremetrics', 'an optional tech label', 'an optional description')
@enduml
```

