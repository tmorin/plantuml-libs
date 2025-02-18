# Tvtime


```text
simpleicons-14/T/Tvtime
```

```text
include('simpleicons-14/T/Tvtime')
```



| Illustration | Tvtime |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/T/Tvtime.png) | ![illustration for Tvtime](../../simpleicons-14/T/Tvtime.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TvtimeXs>`
- `<$TvtimeSm>`
- `<$TvtimeMd>`
- `<$TvtimeLg>`





## Tvtime

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Tvtime
include('simpleicons-14/T/Tvtime')

' renders the element
Tvtime('Tvtime', 'Tvtime', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Tvtime
include('simpleicons-14/T/Tvtime')

' renders the element
Tvtime('Tvtime', 'Tvtime', 'an optional tech label', 'an optional description')
@enduml
```

