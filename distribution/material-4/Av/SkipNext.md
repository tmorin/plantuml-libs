# SkipNext


```text
material-4/Av/SkipNext
```

```text
include('material-4/Av/SkipNext')
```



| Illustration | SkipNext |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Av/SkipNext.png) | ![illustration for SkipNext](../../material-4/Av/SkipNext.Local.png) |




## SkipNext

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element SkipNext
include('material-4/Av/SkipNext')

' renders the element
SkipNext('SkipNext', 'Skip Next', 'an optional tech label')
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

' loads the Item which embeds the element SkipNext
include('material-4/Av/SkipNext')

' renders the element
SkipNext('SkipNext', 'Skip Next', 'an optional tech label')
@enduml
```

