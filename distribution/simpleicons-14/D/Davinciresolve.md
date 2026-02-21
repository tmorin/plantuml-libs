# Davinciresolve


```text
simpleicons-14/D/Davinciresolve
```

```text
include('simpleicons-14/D/Davinciresolve')
```



| Illustration | Davinciresolve |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/D/Davinciresolve.png) | ![illustration for Davinciresolve](../../simpleicons-14/D/Davinciresolve.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DavinciresolveXs>`
- `<$DavinciresolveSm>`
- `<$DavinciresolveMd>`
- `<$DavinciresolveLg>`





## Davinciresolve

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Davinciresolve
include('simpleicons-14/D/Davinciresolve')

' renders the element
Davinciresolve('Davinciresolve', 'Davinciresolve', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Davinciresolve
include('simpleicons-14/D/Davinciresolve')

' renders the element
Davinciresolve('Davinciresolve', 'Davinciresolve', 'an optional tech label', 'an optional description')
@enduml
```

