# Sky


```text
simpleicons/S/Sky
```

```text
include('simpleicons/S/Sky')
```



| Illustration | Sky |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/S/Sky.png) | ![illustration for Sky](../../simpleicons/S/Sky.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SkyXs>`
- `<$SkySm>`
- `<$SkyMd>`
- `<$SkyLg>`





## Sky

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Sky
include('simpleicons/S/Sky')

' renders the element
Sky('Sky', 'Sky', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Sky
include('simpleicons/S/Sky')

' renders the element
Sky('Sky', 'Sky', 'an optional tech label', 'an optional description')
@enduml
```

