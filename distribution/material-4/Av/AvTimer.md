# AvTimer


```text
material-4/Av/AvTimer
```

```text
include('material-4/Av/AvTimer')
```



| Illustration | AvTimer |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Av/AvTimer.png) | ![illustration for AvTimer](../../material-4/Av/AvTimer.Local.png) |




## AvTimer

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element AvTimer
include('material-4/Av/AvTimer')

' renders the element
AvTimer('AvTimer', 'Av Timer', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element AvTimer
include('material-4/Av/AvTimer')

' renders the element
AvTimer('AvTimer', 'Av Timer', 'an optional tech label', 'an optional description')
@enduml
```

