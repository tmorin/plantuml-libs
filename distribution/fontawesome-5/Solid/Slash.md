# Slash


```text
fontawesome-5/Solid/Slash
```

```text
include('fontawesome-5/Solid/Slash')
```



| Illustration | Slash |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Slash.png) | ![illustration for Slash](../../fontawesome-5/Solid/Slash.Local.png) |




## Slash

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Slash
include('fontawesome-5/Solid/Slash')

' renders the element
Slash('Slash', 'Slash', 'an optional tech label')
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

' loads the Item which embeds the element Slash
include('fontawesome-5/Solid/Slash')

' renders the element
Slash('Slash', 'Slash', 'an optional tech label')
@enduml
```

