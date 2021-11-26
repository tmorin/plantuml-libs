# BorderAll


```text
fontawesome-5/Solid/BorderAll
```

```text
include('fontawesome-5/Solid/BorderAll')
```



| Illustration | BorderAll |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/BorderAll.png) | ![illustration for BorderAll](../../fontawesome-5/Solid/BorderAll.Local.png) |




## BorderAll

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element BorderAll
include('fontawesome-5/Solid/BorderAll')

' renders the element
BorderAll('BorderAll', 'Border All', 'an optional tech label')
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

' loads the Item which embeds the element BorderAll
include('fontawesome-5/Solid/BorderAll')

' renders the element
BorderAll('BorderAll', 'Border All', 'an optional tech label')
@enduml
```

