# Swisscows


```text
simpleicons/S/Swisscows
```

```text
include('simpleicons/S/Swisscows')
```



| Illustration | Swisscows |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/S/Swisscows.png) | ![illustration for Swisscows](../../simpleicons/S/Swisscows.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SwisscowsXs>`
- `<$SwisscowsSm>`
- `<$SwisscowsMd>`
- `<$SwisscowsLg>`





## Swisscows

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Swisscows
include('simpleicons/S/Swisscows')

' renders the element
Swisscows('Swisscows', 'Swisscows', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Swisscows
include('simpleicons/S/Swisscows')

' renders the element
Swisscows('Swisscows', 'Swisscows', 'an optional tech label', 'an optional description')
@enduml
```

