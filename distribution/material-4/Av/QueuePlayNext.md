# QueuePlayNext


```text
material-4/Av/QueuePlayNext
```

```text
include('material-4/Av/QueuePlayNext')
```



| Illustration | QueuePlayNext |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Av/QueuePlayNext.png) | ![illustration for QueuePlayNext](../../material-4/Av/QueuePlayNext.Local.png) |




## QueuePlayNext

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element QueuePlayNext
include('material-4/Av/QueuePlayNext')

' renders the element
QueuePlayNext('QueuePlayNext', 'Queue Play Next', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element QueuePlayNext
include('material-4/Av/QueuePlayNext')

' renders the element
QueuePlayNext('QueuePlayNext', 'Queue Play Next', 'an optional tech label', 'an optional description')
@enduml
```

