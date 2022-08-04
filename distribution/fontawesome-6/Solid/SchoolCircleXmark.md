# SchoolCircleXmark


```text
fontawesome-6/Solid/SchoolCircleXmark
```

```text
include('fontawesome-6/Solid/SchoolCircleXmark')
```



| Illustration | SchoolCircleXmark |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/SchoolCircleXmark.png) | ![illustration for SchoolCircleXmark](../../fontawesome-6/Solid/SchoolCircleXmark.Local.png) |




## SchoolCircleXmark

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element SchoolCircleXmark
include('fontawesome-6/Solid/SchoolCircleXmark')

' renders the element
SchoolCircleXmark('SchoolCircleXmark', 'School Circle Xmark', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element SchoolCircleXmark
include('fontawesome-6/Solid/SchoolCircleXmark')

' renders the element
SchoolCircleXmark('SchoolCircleXmark', 'School Circle Xmark', 'an optional tech label', 'an optional description')
@enduml
```

