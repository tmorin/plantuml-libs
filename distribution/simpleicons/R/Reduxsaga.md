# Reduxsaga


```text
simpleicons/R/Reduxsaga
```

```text
include('simpleicons/R/Reduxsaga')
```



| Illustration | Reduxsaga |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/R/Reduxsaga.png) | ![illustration for Reduxsaga](../../simpleicons/R/Reduxsaga.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ReduxsagaXs>`
- `<$ReduxsagaSm>`
- `<$ReduxsagaMd>`
- `<$ReduxsagaLg>`





## Reduxsaga

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Reduxsaga
include('simpleicons/R/Reduxsaga')

' renders the element
Reduxsaga('Reduxsaga', 'Reduxsaga', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Reduxsaga
include('simpleicons/R/Reduxsaga')

' renders the element
Reduxsaga('Reduxsaga', 'Reduxsaga', 'an optional tech label', 'an optional description')
@enduml
```

