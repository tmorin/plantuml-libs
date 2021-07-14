# Snooze


```text
material-4/Av/Snooze
```

```text
include('material-4/Av/Snooze')
```



| Illustration | Snooze |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Av/Snooze.png) | ![illustration for Snooze](../../material-4/Av/Snooze.Local.png) |




## Snooze

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Snooze
include('material-4/Av/Snooze')

' renders the element
Snooze('Snooze', 'Snooze', 'an optional tech label')
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

' loads the Item which embeds the element Snooze
include('material-4/Av/Snooze')

' renders the element
Snooze('Snooze', 'Snooze', 'an optional tech label')
@enduml
```

