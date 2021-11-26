# Trash


```text
fontawesome-5/Solid/Trash
```

```text
include('fontawesome-5/Solid/Trash')
```



| Illustration | Trash |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Trash.png) | ![illustration for Trash](../../fontawesome-5/Solid/Trash.Local.png) |




## Trash

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Trash
include('fontawesome-5/Solid/Trash')

' renders the element
Trash('Trash', 'Trash', 'an optional tech label')
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

' loads the Item which embeds the element Trash
include('fontawesome-5/Solid/Trash')

' renders the element
Trash('Trash', 'Trash', 'an optional tech label')
@enduml
```

