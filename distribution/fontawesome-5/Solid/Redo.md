# Redo


```text
fontawesome-5/Solid/Redo
```

```text
include('fontawesome-5/Solid/Redo')
```



| Illustration | Redo |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Redo.png) | ![illustration for Redo](../../fontawesome-5/Solid/Redo.Local.png) |




## Redo

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Redo
include('fontawesome-5/Solid/Redo')

' renders the element
Redo('Redo', 'Redo', 'an optional tech label')
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

' loads the Item which embeds the element Redo
include('fontawesome-5/Solid/Redo')

' renders the element
Redo('Redo', 'Redo', 'an optional tech label')
@enduml
```

