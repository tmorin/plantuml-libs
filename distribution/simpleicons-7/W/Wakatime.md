# Wakatime


```text
simpleicons-7/W/Wakatime
```

```text
include('simpleicons-7/W/Wakatime')
```



| Illustration | Wakatime |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/W/Wakatime.png) | ![illustration for Wakatime](../../simpleicons-7/W/Wakatime.Local.png) |




## Wakatime

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Wakatime
include('simpleicons-7/W/Wakatime')

' renders the element
Wakatime('Wakatime', 'Wakatime', 'an optional tech label')
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
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Wakatime
include('simpleicons-7/W/Wakatime')

' renders the element
Wakatime('Wakatime', 'Wakatime', 'an optional tech label')
@enduml
```

