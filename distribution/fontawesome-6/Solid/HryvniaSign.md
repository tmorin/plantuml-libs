# HryvniaSign


```text
fontawesome-6/Solid/HryvniaSign
```

```text
include('fontawesome-6/Solid/HryvniaSign')
```



| Illustration | HryvniaSign |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/HryvniaSign.png) | ![illustration for HryvniaSign](../../fontawesome-6/Solid/HryvniaSign.Local.png) |




## HryvniaSign

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element HryvniaSign
include('fontawesome-6/Solid/HryvniaSign')

' renders the element
HryvniaSign('HryvniaSign', 'Hryvnia Sign', 'an optional tech label')
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

' loads the Item which embeds the element HryvniaSign
include('fontawesome-6/Solid/HryvniaSign')

' renders the element
HryvniaSign('HryvniaSign', 'Hryvnia Sign', 'an optional tech label')
@enduml
```

