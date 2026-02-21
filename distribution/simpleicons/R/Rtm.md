# Rtm


```text
simpleicons/R/Rtm
```

```text
include('simpleicons/R/Rtm')
```



| Illustration | Rtm |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/R/Rtm.png) | ![illustration for Rtm](../../simpleicons/R/Rtm.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$RtmXs>`
- `<$RtmSm>`
- `<$RtmMd>`
- `<$RtmLg>`





## Rtm

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Rtm
include('simpleicons/R/Rtm')

' renders the element
Rtm('Rtm', 'Rtm', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Rtm
include('simpleicons/R/Rtm')

' renders the element
Rtm('Rtm', 'Rtm', 'an optional tech label', 'an optional description')
@enduml
```

