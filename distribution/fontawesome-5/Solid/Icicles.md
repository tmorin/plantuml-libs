# Icicles


```text
fontawesome-5/Solid/Icicles
```

```text
include('fontawesome-5/Solid/Icicles')
```



| Illustration | Icicles |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Icicles.png) | ![illustration for Icicles](../../fontawesome-5/Solid/Icicles.Local.png) |




## Icicles

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Icicles
include('fontawesome-5/Solid/Icicles')

' renders the element
Icicles('Icicles', 'Icicles', 'an optional tech label')
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

' loads the Item which embeds the element Icicles
include('fontawesome-5/Solid/Icicles')

' renders the element
Icicles('Icicles', 'Icicles', 'an optional tech label')
@enduml
```

