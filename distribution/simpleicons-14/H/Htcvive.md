# Htcvive


```text
simpleicons-14/H/Htcvive
```

```text
include('simpleicons-14/H/Htcvive')
```



| Illustration | Htcvive |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/H/Htcvive.png) | ![illustration for Htcvive](../../simpleicons-14/H/Htcvive.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$HtcviveXs>`
- `<$HtcviveSm>`
- `<$HtcviveMd>`
- `<$HtcviveLg>`





## Htcvive

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Htcvive
include('simpleicons-14/H/Htcvive')

' renders the element
Htcvive('Htcvive', 'Htcvive', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Htcvive
include('simpleicons-14/H/Htcvive')

' renders the element
Htcvive('Htcvive', 'Htcvive', 'an optional tech label', 'an optional description')
@enduml
```

