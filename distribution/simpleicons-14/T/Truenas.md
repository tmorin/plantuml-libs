# Truenas


```text
simpleicons-14/T/Truenas
```

```text
include('simpleicons-14/T/Truenas')
```



| Illustration | Truenas |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/T/Truenas.png) | ![illustration for Truenas](../../simpleicons-14/T/Truenas.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TruenasXs>`
- `<$TruenasSm>`
- `<$TruenasMd>`
- `<$TruenasLg>`





## Truenas

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Truenas
include('simpleicons-14/T/Truenas')

' renders the element
Truenas('Truenas', 'Truenas', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Truenas
include('simpleicons-14/T/Truenas')

' renders the element
Truenas('Truenas', 'Truenas', 'an optional tech label', 'an optional description')
@enduml
```

