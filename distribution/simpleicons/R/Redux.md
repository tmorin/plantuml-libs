# Redux


```text
simpleicons/R/Redux
```

```text
include('simpleicons/R/Redux')
```



| Illustration | Redux |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/R/Redux.png) | ![illustration for Redux](../../simpleicons/R/Redux.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ReduxXs>`
- `<$ReduxSm>`
- `<$ReduxMd>`
- `<$ReduxLg>`





## Redux

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Redux
include('simpleicons/R/Redux')

' renders the element
Redux('Redux', 'Redux', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Redux
include('simpleicons/R/Redux')

' renders the element
Redux('Redux', 'Redux', 'an optional tech label', 'an optional description')
@enduml
```

