# CircleXmark


```text
fontawesome-6/Regular/CircleXmark
```

```text
include('fontawesome-6/Regular/CircleXmark')
```



| Illustration | CircleXmark |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Regular/CircleXmark.png) | ![illustration for CircleXmark](../../fontawesome-6/Regular/CircleXmark.Local.png) |




## CircleXmark

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element CircleXmark
include('fontawesome-6/Regular/CircleXmark')

' renders the element
CircleXmark('CircleXmark', 'Circle Xmark', 'an optional tech label')
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

' loads the Item which embeds the element CircleXmark
include('fontawesome-6/Regular/CircleXmark')

' renders the element
CircleXmark('CircleXmark', 'Circle Xmark', 'an optional tech label')
@enduml
```

