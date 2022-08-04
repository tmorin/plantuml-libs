# AmpStories


```text
material-4/Content/AmpStories
```

```text
include('material-4/Content/AmpStories')
```



| Illustration | AmpStories |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Content/AmpStories.png) | ![illustration for AmpStories](../../material-4/Content/AmpStories.Local.png) |




## AmpStories

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element AmpStories
include('material-4/Content/AmpStories')

' renders the element
AmpStories('AmpStories', 'Amp Stories', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element AmpStories
include('material-4/Content/AmpStories')

' renders the element
AmpStories('AmpStories', 'Amp Stories', 'an optional tech label', 'an optional description')
@enduml
```

