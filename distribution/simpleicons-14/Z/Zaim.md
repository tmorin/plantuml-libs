# Zaim


```text
simpleicons-14/Z/Zaim
```

```text
include('simpleicons-14/Z/Zaim')
```



| Illustration | Zaim |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/Z/Zaim.png) | ![illustration for Zaim](../../simpleicons-14/Z/Zaim.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ZaimXs>`
- `<$ZaimSm>`
- `<$ZaimMd>`
- `<$ZaimLg>`





## Zaim

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Zaim
include('simpleicons-14/Z/Zaim')

' renders the element
Zaim('Zaim', 'Zaim', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Zaim
include('simpleicons-14/Z/Zaim')

' renders the element
Zaim('Zaim', 'Zaim', 'an optional tech label', 'an optional description')
@enduml
```

