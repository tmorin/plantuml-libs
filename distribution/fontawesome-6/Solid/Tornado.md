# Tornado


```text
fontawesome-6/Solid/Tornado
```

```text
include('fontawesome-6/Solid/Tornado')
```



| Illustration | Tornado |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/Tornado.png) | ![illustration for Tornado](../../fontawesome-6/Solid/Tornado.Local.png) |



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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Tornado
include('fontawesome-6/Solid/Tornado')

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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Tornado
include('fontawesome-6/Solid/Tornado')

' renders the element
Tornado('Tornado', 'Tornado', 'an optional tech label', 'an optional description')
@enduml
```

