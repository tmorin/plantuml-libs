# Stopwatch20


```text
fontawesome/Solid/Stopwatch20
```

```text
include('fontawesome/Solid/Stopwatch20')
```



| Illustration | Stopwatch20 |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Stopwatch20.png) | ![illustration for Stopwatch20](../../fontawesome/Solid/Stopwatch20.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$Stopwatch20Xs>`
- `<$Stopwatch20Sm>`
- `<$Stopwatch20Md>`
- `<$Stopwatch20Lg>`





## Stopwatch20

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Stopwatch20
include('fontawesome/Solid/Stopwatch20')

' renders the element
Stopwatch20('Stopwatch20', 'Stopwatch20', 'an optional tech label', 'an optional description')
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
include('fontawesome/bootstrap')

' loads the Item which embeds the element Stopwatch20
include('fontawesome/Solid/Stopwatch20')

' renders the element
Stopwatch20('Stopwatch20', 'Stopwatch20', 'an optional tech label', 'an optional description')
@enduml
```

