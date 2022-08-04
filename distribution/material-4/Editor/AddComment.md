# AddComment


```text
material-4/Editor/AddComment
```

```text
include('material-4/Editor/AddComment')
```



| Illustration | AddComment |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Editor/AddComment.png) | ![illustration for AddComment](../../material-4/Editor/AddComment.Local.png) |




## AddComment

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element AddComment
include('material-4/Editor/AddComment')

' renders the element
AddComment('AddComment', 'Add Comment', 'an optional tech label', 'an optional description')
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
include('material-4/bootstrap')

' loads the Item which embeds the element AddComment
include('material-4/Editor/AddComment')

' renders the element
AddComment('AddComment', 'Add Comment', 'an optional tech label', 'an optional description')
@enduml
```

