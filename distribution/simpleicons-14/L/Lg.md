# Lg


```text
simpleicons-14/L/Lg
```

```text
include('simpleicons-14/L/Lg')
```



| Illustration | Lg |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/L/Lg.png) | ![illustration for Lg](../../simpleicons-14/L/Lg.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$LgXs>`
- `<$LgSm>`
- `<$LgMd>`
- `<$LgLg>`





## Lg

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Lg
include('simpleicons-14/L/Lg')

' renders the element
Lg('Lg', 'Lg', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Lg
include('simpleicons-14/L/Lg')

' renders the element
Lg('Lg', 'Lg', 'an optional tech label', 'an optional description')
@enduml
```

