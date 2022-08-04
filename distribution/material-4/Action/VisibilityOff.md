# VisibilityOff


```text
material-4/Action/VisibilityOff
```

```text
include('material-4/Action/VisibilityOff')
```



| Illustration | VisibilityOff |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/VisibilityOff.png) | ![illustration for VisibilityOff](../../material-4/Action/VisibilityOff.Local.png) |




## VisibilityOff

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element VisibilityOff
include('material-4/Action/VisibilityOff')

' renders the element
VisibilityOff('VisibilityOff', 'Visibility Off', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element VisibilityOff
include('material-4/Action/VisibilityOff')

' renders the element
VisibilityOff('VisibilityOff', 'Visibility Off', 'an optional tech label', 'an optional description')
@enduml
```

