# Simpleicons


```text
simpleicons/S/Simpleicons
```

```text
include('simpleicons/S/Simpleicons')
```



| Illustration | Simpleicons |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/S/Simpleicons.png) | ![illustration for Simpleicons](../../simpleicons/S/Simpleicons.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SimpleiconsXs>`
- `<$SimpleiconsSm>`
- `<$SimpleiconsMd>`
- `<$SimpleiconsLg>`





## Simpleicons

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Simpleicons
include('simpleicons/S/Simpleicons')

' renders the element
Simpleicons('Simpleicons', 'Simpleicons', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Simpleicons
include('simpleicons/S/Simpleicons')

' renders the element
Simpleicons('Simpleicons', 'Simpleicons', 'an optional tech label', 'an optional description')
@enduml
```

