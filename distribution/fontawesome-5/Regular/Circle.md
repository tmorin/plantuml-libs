# Circle


```text
fontawesome-5/Regular/Circle
```

```text
include('fontawesome-5/Regular/Circle')
```



| Illustration | Circle |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Regular/Circle.png) | ![illustration for Circle](../../fontawesome-5/Regular/Circle.Local.png) |




## Circle

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Circle
include('fontawesome-5/Regular/Circle')

' renders the element
Circle('Circle', 'Circle', 'an optional tech label')
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

' loads the Item which embeds the element Circle
include('fontawesome-5/Regular/Circle')

' renders the element
Circle('Circle', 'Circle', 'an optional tech label')
@enduml
```

