# Slash


```text
fontawesome-6/Solid/Slash
```

```text
include('fontawesome-6/Solid/Slash')
```



| Illustration | Slash |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/Slash.png) | ![illustration for Slash](../../fontawesome-6/Solid/Slash.Local.png) |




## Slash

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Slash
include('fontawesome-6/Solid/Slash')

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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Slash
include('fontawesome-6/Solid/Slash')

' renders the element
Slash('Slash', 'Slash', 'an optional tech label')
@enduml
```

