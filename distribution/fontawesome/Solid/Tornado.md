# Tornado


```text
fontawesome/Solid/Tornado
```

```text
include('fontawesome/Solid/Tornado')
```



| Illustration | Tornado |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Tornado.png) | ![illustration for Tornado](../../fontawesome/Solid/Tornado.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TornadoXs>`
- `<$TornadoSm>`
- `<$TornadoMd>`
- `<$TornadoLg>`





## Tornado

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Tornado
include('fontawesome/Solid/Tornado')

' renders the element
Tornado('Tornado', 'Tornado', 'an optional tech label', 'an optional description')
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
include('fontawesome/bootstrap')

' loads the Item which embeds the element Tornado
include('fontawesome/Solid/Tornado')

' renders the element
Tornado('Tornado', 'Tornado', 'an optional tech label', 'an optional description')
@enduml
```

