# Skull


```text
fontawesome-5/Solid/Skull
```

```text
include('fontawesome-5/Solid/Skull')
```



| Illustration | Skull |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Skull.png) | ![illustration for Skull](../../fontawesome-5/Solid/Skull.Local.png) |




## Skull

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Skull
include('fontawesome-5/Solid/Skull')

' renders the element
Skull('Skull', 'Skull', 'an optional tech label')
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

' loads the Item which embeds the element Skull
include('fontawesome-5/Solid/Skull')

' renders the element
Skull('Skull', 'Skull', 'an optional tech label')
@enduml
```

