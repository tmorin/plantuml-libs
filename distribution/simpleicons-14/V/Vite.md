# Vite


```text
simpleicons-14/V/Vite
```

```text
include('simpleicons-14/V/Vite')
```



| Illustration | Vite |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/V/Vite.png) | ![illustration for Vite](../../simpleicons-14/V/Vite.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ViteXs>`
- `<$ViteSm>`
- `<$ViteMd>`
- `<$ViteLg>`





## Vite

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Vite
include('simpleicons-14/V/Vite')

' renders the element
Vite('Vite', 'Vite', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Vite
include('simpleicons-14/V/Vite')

' renders the element
Vite('Vite', 'Vite', 'an optional tech label', 'an optional description')
@enduml
```

