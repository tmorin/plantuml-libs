# Worm


```text
fontawesome-6/Solid/Worm
```

```text
include('fontawesome-6/Solid/Worm')
```



| Illustration | Worm |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/Worm.png) | ![illustration for Worm](../../fontawesome-6/Solid/Worm.Local.png) |




## Worm

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Worm
include('fontawesome-6/Solid/Worm')

' renders the element
Worm('Worm', 'Worm', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Worm
include('fontawesome-6/Solid/Worm')

' renders the element
Worm('Worm', 'Worm', 'an optional tech label', 'an optional description')
@enduml
```

