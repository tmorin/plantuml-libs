# Settings


```text
material-4/Action/Settings
```

```text
include('material-4/Action/Settings')
```



| Illustration | Settings |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/Settings.png) | ![illustration for Settings](../../material-4/Action/Settings.Local.png) |




## Settings

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Settings
include('material-4/Action/Settings')

' renders the element
Settings('Settings', 'Settings', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Settings
include('material-4/Action/Settings')

' renders the element
Settings('Settings', 'Settings', 'an optional tech label', 'an optional description')
@enduml
```

