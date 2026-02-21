# Upptime


```text
simpleicons-14/U/Upptime
```

```text
include('simpleicons-14/U/Upptime')
```



| Illustration | Upptime |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/U/Upptime.png) | ![illustration for Upptime](../../simpleicons-14/U/Upptime.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$UpptimeXs>`
- `<$UpptimeSm>`
- `<$UpptimeMd>`
- `<$UpptimeLg>`





## Upptime

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Upptime
include('simpleicons-14/U/Upptime')

' renders the element
Upptime('Upptime', 'Upptime', 'an optional tech label', 'an optional description')
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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Upptime
include('simpleicons-14/U/Upptime')

' renders the element
Upptime('Upptime', 'Upptime', 'an optional tech label', 'an optional description')
@enduml
```

