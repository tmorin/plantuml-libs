# Jsr


```text
simpleicons-14/J/Jsr
```

```text
include('simpleicons-14/J/Jsr')
```



| Illustration | Jsr |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/J/Jsr.png) | ![illustration for Jsr](../../simpleicons-14/J/Jsr.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$JsrXs>`
- `<$JsrSm>`
- `<$JsrMd>`
- `<$JsrLg>`





## Jsr

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Jsr
include('simpleicons-14/J/Jsr')

' renders the element
Jsr('Jsr', 'Jsr', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Jsr
include('simpleicons-14/J/Jsr')

' renders the element
Jsr('Jsr', 'Jsr', 'an optional tech label', 'an optional description')
@enduml
```

