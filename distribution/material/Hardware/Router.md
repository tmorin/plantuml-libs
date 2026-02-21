# Router


```text
material/Hardware/Router
```

```text
include('material/Hardware/Router')
```



| Illustration | Router |
| :---: | :---: |
| ![illustration for Illustration](../../material/Hardware/Router.png) | ![illustration for Router](../../material/Hardware/Router.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$RouterXs>`
- `<$RouterSm>`
- `<$RouterMd>`
- `<$RouterLg>`





## Router

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element Router
include('material/Hardware/Router')

' renders the element
Router('Router', 'Router', 'an optional tech label', 'an optional description')
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
include('material/bootstrap')

' loads the Item which embeds the element Router
include('material/Hardware/Router')

' renders the element
Router('Router', 'Router', 'an optional tech label', 'an optional description')
@enduml
```

