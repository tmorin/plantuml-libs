# WhereToVote


```text
material-4/Content/WhereToVote
```

```text
include('material-4/Content/WhereToVote')
```



| Illustration | WhereToVote |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Content/WhereToVote.png) | ![illustration for WhereToVote](../../material-4/Content/WhereToVote.Local.png) |




## WhereToVote

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element WhereToVote
include('material-4/Content/WhereToVote')

' renders the element
WhereToVote('WhereToVote', 'Where To Vote', 'an optional tech label')
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

' loads the Item which embeds the element WhereToVote
include('material-4/Content/WhereToVote')

' renders the element
WhereToVote('WhereToVote', 'Where To Vote', 'an optional tech label')
@enduml
```

