# Outdent


```text
fontawesome-5/Solid/Outdent
```

```text
include('fontawesome-5/Solid/Outdent')
```



| Illustration | Outdent |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Outdent.png) | ![illustration for Outdent](../../fontawesome-5/Solid/Outdent.Local.png) |




## Outdent

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Outdent
include('fontawesome-5/Solid/Outdent')

' renders the element
Outdent('Outdent', 'Outdent', 'an optional tech label')
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

' loads the Item which embeds the element Outdent
include('fontawesome-5/Solid/Outdent')

' renders the element
Outdent('Outdent', 'Outdent', 'an optional tech label')
@enduml
```

