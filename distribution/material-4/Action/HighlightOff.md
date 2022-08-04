# HighlightOff


```text
material-4/Action/HighlightOff
```

```text
include('material-4/Action/HighlightOff')
```



| Illustration | HighlightOff |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/HighlightOff.png) | ![illustration for HighlightOff](../../material-4/Action/HighlightOff.Local.png) |




## HighlightOff

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element HighlightOff
include('material-4/Action/HighlightOff')

' renders the element
HighlightOff('HighlightOff', 'Highlight Off', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element HighlightOff
include('material-4/Action/HighlightOff')

' renders the element
HighlightOff('HighlightOff', 'Highlight Off', 'an optional tech label', 'an optional description')
@enduml
```

