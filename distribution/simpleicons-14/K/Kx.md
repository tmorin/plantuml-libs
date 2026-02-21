# Kx


```text
simpleicons-14/K/Kx
```

```text
include('simpleicons-14/K/Kx')
```



| Illustration | Kx |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/K/Kx.png) | ![illustration for Kx](../../simpleicons-14/K/Kx.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$KxXs>`
- `<$KxSm>`
- `<$KxMd>`
- `<$KxLg>`





## Kx

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Kx
include('simpleicons-14/K/Kx')

' renders the element
Kx('Kx', 'Kx', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Kx
include('simpleicons-14/K/Kx')

' renders the element
Kx('Kx', 'Kx', 'an optional tech label', 'an optional description')
@enduml
```

