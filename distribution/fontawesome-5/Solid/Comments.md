# Comments


```text
fontawesome-5/Solid/Comments
```

```text
include('fontawesome-5/Solid/Comments')
```



| Illustration | Comments |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Comments.png) | ![illustration for Comments](../../fontawesome-5/Solid/Comments.Local.png) |




## Comments

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Comments
include('fontawesome-5/Solid/Comments')

' renders the element
Comments('Comments', 'Comments', 'an optional tech label')
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

' loads the Item which embeds the element Comments
include('fontawesome-5/Solid/Comments')

' renders the element
Comments('Comments', 'Comments', 'an optional tech label')
@enduml
```

