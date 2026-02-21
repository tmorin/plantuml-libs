# Dtube


```text
simpleicons/D/Dtube
```

```text
include('simpleicons/D/Dtube')
```



| Illustration | Dtube |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/D/Dtube.png) | ![illustration for Dtube](../../simpleicons/D/Dtube.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DtubeXs>`
- `<$DtubeSm>`
- `<$DtubeMd>`
- `<$DtubeLg>`





## Dtube

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Dtube
include('simpleicons/D/Dtube')

' renders the element
Dtube('Dtube', 'Dtube', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Dtube
include('simpleicons/D/Dtube')

' renders the element
Dtube('Dtube', 'Dtube', 'an optional tech label', 'an optional description')
@enduml
```

