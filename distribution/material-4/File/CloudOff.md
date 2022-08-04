# CloudOff


```text
material-4/File/CloudOff
```

```text
include('material-4/File/CloudOff')
```



| Illustration | CloudOff |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/File/CloudOff.png) | ![illustration for CloudOff](../../material-4/File/CloudOff.Local.png) |




## CloudOff

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element CloudOff
include('material-4/File/CloudOff')

' renders the element
CloudOff('CloudOff', 'Cloud Off', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element CloudOff
include('material-4/File/CloudOff')

' renders the element
CloudOff('CloudOff', 'Cloud Off', 'an optional tech label', 'an optional description')
@enduml
```

