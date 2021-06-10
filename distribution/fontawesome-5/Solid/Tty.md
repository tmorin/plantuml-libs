# Tty


```text
fontawesome-5/Solid/Tty
```

```text
include('fontawesome-5/Solid/Tty')
```



| Illustration | Tty |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Tty.png) | ![illustration for Tty](../../fontawesome-5/Solid/Tty.Local.png) |




## Tty

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Tty
include('fontawesome-5/Solid/Tty')

' renders the element
Tty('Tty', 'Tty', 'an optional tech label')
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

' loads the Item which embeds the element Tty
include('fontawesome-5/Solid/Tty')

' renders the element
Tty('Tty', 'Tty', 'an optional tech label')
@enduml
```

