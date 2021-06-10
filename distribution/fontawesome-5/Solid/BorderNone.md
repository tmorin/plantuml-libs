# BorderNone


```text
fontawesome-5/Solid/BorderNone
```

```text
include('fontawesome-5/Solid/BorderNone')
```



| Illustration | BorderNone |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/BorderNone.png) | ![illustration for BorderNone](../../fontawesome-5/Solid/BorderNone.Local.png) |




## BorderNone

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element BorderNone
include('fontawesome-5/Solid/BorderNone')

' renders the element
BorderNone('BorderNone', 'Border None', 'an optional tech label')
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

' loads the Item which embeds the element BorderNone
include('fontawesome-5/Solid/BorderNone')

' renders the element
BorderNone('BorderNone', 'Border None', 'an optional tech label')
@enduml
```

