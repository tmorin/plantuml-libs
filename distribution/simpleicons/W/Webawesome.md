# Webawesome


```text
simpleicons/W/Webawesome
```

```text
include('simpleicons/W/Webawesome')
```



| Illustration | Webawesome |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/W/Webawesome.png) | ![illustration for Webawesome](../../simpleicons/W/Webawesome.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$WebawesomeXs>`
- `<$WebawesomeSm>`
- `<$WebawesomeMd>`
- `<$WebawesomeLg>`





## Webawesome

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Webawesome
include('simpleicons/W/Webawesome')

' renders the element
Webawesome('Webawesome', 'Webawesome', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Webawesome
include('simpleicons/W/Webawesome')

' renders the element
Webawesome('Webawesome', 'Webawesome', 'an optional tech label', 'an optional description')
@enduml
```

