# Tvtime


```text
simpleicons-7/T/Tvtime
```

```text
include('simpleicons-7/T/Tvtime')
```



| Illustration | Tvtime |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/T/Tvtime.png) | ![illustration for Tvtime](../../simpleicons-7/T/Tvtime.Local.png) |




## Tvtime

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Tvtime
include('simpleicons-7/T/Tvtime')

' renders the element
Tvtime('Tvtime', 'Tvtime', 'an optional tech label')
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

' loads the Item which embeds the element Tvtime
include('simpleicons-7/T/Tvtime')

' renders the element
Tvtime('Tvtime', 'Tvtime', 'an optional tech label')
@enduml
```

