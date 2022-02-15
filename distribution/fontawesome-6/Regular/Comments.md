# Comments


```text
fontawesome-6/Regular/Comments
```

```text
include('fontawesome-6/Regular/Comments')
```



| Illustration | Comments |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Regular/Comments.png) | ![illustration for Comments](../../fontawesome-6/Regular/Comments.Local.png) |




## Comments

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Comments
include('fontawesome-6/Regular/Comments')

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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Comments
include('fontawesome-6/Regular/Comments')

' renders the element
Comments('Comments', 'Comments', 'an optional tech label')
@enduml
```

