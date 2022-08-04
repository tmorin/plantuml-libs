# HowToVote


```text
material-4/Content/HowToVote
```

```text
include('material-4/Content/HowToVote')
```



| Illustration | HowToVote |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Content/HowToVote.png) | ![illustration for HowToVote](../../material-4/Content/HowToVote.Local.png) |




## HowToVote

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element HowToVote
include('material-4/Content/HowToVote')

' renders the element
HowToVote('HowToVote', 'How To Vote', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element HowToVote
include('material-4/Content/HowToVote')

' renders the element
HowToVote('HowToVote', 'How To Vote', 'an optional tech label', 'an optional description')
@enduml
```

