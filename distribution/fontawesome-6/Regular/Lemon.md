# Lemon


```text
fontawesome-6/Regular/Lemon
```

```text
include('fontawesome-6/Regular/Lemon')
```



| Illustration | Lemon |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Regular/Lemon.png) | ![illustration for Lemon](../../fontawesome-6/Regular/Lemon.Local.png) |




## Lemon

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Lemon
include('fontawesome-6/Regular/Lemon')

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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Lemon
include('fontawesome-6/Regular/Lemon')

' renders the element
Lemon('Lemon', 'Lemon', 'an optional tech label')
@enduml
```

