# Stopwatch


```text
fontawesome-6/Solid/Stopwatch
```

```text
include('fontawesome-6/Solid/Stopwatch')
```



| Illustration | Stopwatch |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/Stopwatch.png) | ![illustration for Stopwatch](../../fontawesome-6/Solid/Stopwatch.Local.png) |




## Stopwatch

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Stopwatch
include('fontawesome-6/Solid/Stopwatch')

' renders the element
Stopwatch('Stopwatch', 'Stopwatch', 'an optional tech label')
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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Stopwatch
include('fontawesome-6/Solid/Stopwatch')

' renders the element
Stopwatch('Stopwatch', 'Stopwatch', 'an optional tech label')
@enduml
```

