# Pi


```text
simpleicons/P/Pi
```

```text
include('simpleicons/P/Pi')
```



| Illustration | Pi |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/P/Pi.png) | ![illustration for Pi](../../simpleicons/P/Pi.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PiXs>`
- `<$PiSm>`
- `<$PiMd>`
- `<$PiLg>`





## Pi

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Pi
include('simpleicons/P/Pi')

' renders the element
Pi('Pi', 'Pi', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Pi
include('simpleicons/P/Pi')

' renders the element
Pi('Pi', 'Pi', 'an optional tech label', 'an optional description')
@enduml
```

