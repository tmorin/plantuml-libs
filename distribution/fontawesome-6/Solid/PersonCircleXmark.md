# PersonCircleXmark


```text
fontawesome-6/Solid/PersonCircleXmark
```

```text
include('fontawesome-6/Solid/PersonCircleXmark')
```



| Illustration | PersonCircleXmark |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/PersonCircleXmark.png) | ![illustration for PersonCircleXmark](../../fontawesome-6/Solid/PersonCircleXmark.Local.png) |




## PersonCircleXmark

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element PersonCircleXmark
include('fontawesome-6/Solid/PersonCircleXmark')

' renders the element
PersonCircleXmark('PersonCircleXmark', 'Person Circle Xmark', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element PersonCircleXmark
include('fontawesome-6/Solid/PersonCircleXmark')

' renders the element
PersonCircleXmark('PersonCircleXmark', 'Person Circle Xmark', 'an optional tech label', 'an optional description')
@enduml
```

