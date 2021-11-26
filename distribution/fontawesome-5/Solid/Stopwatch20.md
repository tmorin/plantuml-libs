# Stopwatch20


```text
fontawesome-5/Solid/Stopwatch20
```

```text
include('fontawesome-5/Solid/Stopwatch20')
```



| Illustration | Stopwatch20 |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Stopwatch20.png) | ![illustration for Stopwatch20](../../fontawesome-5/Solid/Stopwatch20.Local.png) |




## Stopwatch20

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Stopwatch20
include('fontawesome-5/Solid/Stopwatch20')

' renders the element
Stopwatch20('Stopwatch20', 'Stopwatch20', 'an optional tech label')
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

' loads the Item which embeds the element Stopwatch20
include('fontawesome-5/Solid/Stopwatch20')

' renders the element
Stopwatch20('Stopwatch20', 'Stopwatch20', 'an optional tech label')
@enduml
```

