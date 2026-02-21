# Robinhood


```text
simpleicons-14/R/Robinhood
```

```text
include('simpleicons-14/R/Robinhood')
```



| Illustration | Robinhood |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/R/Robinhood.png) | ![illustration for Robinhood](../../simpleicons-14/R/Robinhood.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$RobinhoodXs>`
- `<$RobinhoodSm>`
- `<$RobinhoodMd>`
- `<$RobinhoodLg>`





## Robinhood

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Robinhood
include('simpleicons-14/R/Robinhood')

' renders the element
Robinhood('Robinhood', 'Robinhood', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Robinhood
include('simpleicons-14/R/Robinhood')

' renders the element
Robinhood('Robinhood', 'Robinhood', 'an optional tech label', 'an optional description')
@enduml
```

