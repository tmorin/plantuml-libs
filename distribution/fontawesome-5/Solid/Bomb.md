# Bomb


```text
fontawesome-5/Solid/Bomb
```

```text
include('fontawesome-5/Solid/Bomb')
```



| Illustration | Bomb |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Bomb.png) | ![illustration for Bomb](../../fontawesome-5/Solid/Bomb.Local.png) |




## Bomb

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Bomb
include('fontawesome-5/Solid/Bomb')

' renders the element
Bomb('Bomb', 'Bomb', 'an optional tech label')
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

' loads the Item which embeds the element Bomb
include('fontawesome-5/Solid/Bomb')

' renders the element
Bomb('Bomb', 'Bomb', 'an optional tech label')
@enduml
```

