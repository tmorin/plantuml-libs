# Fontawesome


```text
simpleicons/F/Fontawesome
```

```text
include('simpleicons/F/Fontawesome')
```



| Illustration | Fontawesome |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/F/Fontawesome.png) | ![illustration for Fontawesome](../../simpleicons/F/Fontawesome.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FontawesomeXs>`
- `<$FontawesomeSm>`
- `<$FontawesomeMd>`
- `<$FontawesomeLg>`





## Fontawesome

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Fontawesome
include('simpleicons/F/Fontawesome')

' renders the element
Fontawesome('Fontawesome', 'Fontawesome', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Fontawesome
include('simpleicons/F/Fontawesome')

' renders the element
Fontawesome('Fontawesome', 'Fontawesome', 'an optional tech label', 'an optional description')
@enduml
```

