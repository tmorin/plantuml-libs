# Webawesome


```text
simpleicons-14/W/Webawesome
```

```text
include('simpleicons-14/W/Webawesome')
```



| Illustration | Webawesome |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/W/Webawesome.png) | ![illustration for Webawesome](../../simpleicons-14/W/Webawesome.Local.png) |



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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Webawesome
include('simpleicons-14/W/Webawesome')

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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Webawesome
include('simpleicons-14/W/Webawesome')

' renders the element
Webawesome('Webawesome', 'Webawesome', 'an optional tech label', 'an optional description')
@enduml
```

