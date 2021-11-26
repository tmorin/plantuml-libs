# Lemon


```text
fontawesome-5/Solid/Lemon
```

```text
include('fontawesome-5/Solid/Lemon')
```



| Illustration | Lemon |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Lemon.png) | ![illustration for Lemon](../../fontawesome-5/Solid/Lemon.Local.png) |




## Lemon

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Lemon
include('fontawesome-5/Solid/Lemon')

' renders the element
Lemon('Lemon', 'Lemon', 'an optional tech label')
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

' loads the Item which embeds the element Lemon
include('fontawesome-5/Solid/Lemon')

' renders the element
Lemon('Lemon', 'Lemon', 'an optional tech label')
@enduml
```

