# Quicktime


```text
simpleicons/Q/Quicktime
```

```text
include('simpleicons/Q/Quicktime')
```



| Illustration | Quicktime |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/Q/Quicktime.png) | ![illustration for Quicktime](../../simpleicons/Q/Quicktime.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$QuicktimeXs>`
- `<$QuicktimeSm>`
- `<$QuicktimeMd>`
- `<$QuicktimeLg>`





## Quicktime

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Quicktime
include('simpleicons/Q/Quicktime')

' renders the element
Quicktime('Quicktime', 'Quicktime', 'an optional tech label', 'an optional description')
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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Quicktime
include('simpleicons/Q/Quicktime')

' renders the element
Quicktime('Quicktime', 'Quicktime', 'an optional tech label', 'an optional description')
@enduml
```

