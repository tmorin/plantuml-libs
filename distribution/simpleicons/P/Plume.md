# Plume


```text
simpleicons/P/Plume
```

```text
include('simpleicons/P/Plume')
```



| Illustration | Plume |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/P/Plume.png) | ![illustration for Plume](../../simpleicons/P/Plume.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PlumeXs>`
- `<$PlumeSm>`
- `<$PlumeMd>`
- `<$PlumeLg>`





## Plume

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Plume
include('simpleicons/P/Plume')

' renders the element
Plume('Plume', 'Plume', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Plume
include('simpleicons/P/Plume')

' renders the element
Plume('Plume', 'Plume', 'an optional tech label', 'an optional description')
@enduml
```

