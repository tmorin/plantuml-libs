# Undo


```text
fontawesome-5/Solid/Undo
```

```text
include('fontawesome-5/Solid/Undo')
```



| Illustration | Undo |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Undo.png) | ![illustration for Undo](../../fontawesome-5/Solid/Undo.Local.png) |




## Undo

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Undo
include('fontawesome-5/Solid/Undo')

' renders the element
Undo('Undo', 'Undo', 'an optional tech label')
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

' loads the Item which embeds the element Undo
include('fontawesome-5/Solid/Undo')

' renders the element
Undo('Undo', 'Undo', 'an optional tech label')
@enduml
```

