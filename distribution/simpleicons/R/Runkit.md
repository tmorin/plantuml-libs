# Runkit


```text
simpleicons/R/Runkit
```

```text
include('simpleicons/R/Runkit')
```



| Illustration | Runkit |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/R/Runkit.png) | ![illustration for Runkit](../../simpleicons/R/Runkit.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$RunkitXs>`
- `<$RunkitSm>`
- `<$RunkitMd>`
- `<$RunkitLg>`





## Runkit

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Runkit
include('simpleicons/R/Runkit')

' renders the element
Runkit('Runkit', 'Runkit', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Runkit
include('simpleicons/R/Runkit')

' renders the element
Runkit('Runkit', 'Runkit', 'an optional tech label', 'an optional description')
@enduml
```

