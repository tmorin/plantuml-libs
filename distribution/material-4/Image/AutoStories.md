# AutoStories


```text
material-4/Image/AutoStories
```

```text
include('material-4/Image/AutoStories')
```



| Illustration | AutoStories |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Image/AutoStories.png) | ![illustration for AutoStories](../../material-4/Image/AutoStories.Local.png) |




## AutoStories

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element AutoStories
include('material-4/Image/AutoStories')

' renders the element
AutoStories('AutoStories', 'Auto Stories', 'an optional tech label')
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

' loads the Item which embeds the element AutoStories
include('material-4/Image/AutoStories')

' renders the element
AutoStories('AutoStories', 'Auto Stories', 'an optional tech label')
@enduml
```

