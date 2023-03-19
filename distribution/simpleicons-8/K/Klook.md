# Klook


```text
simpleicons-8/K/Klook
```

```text
include('simpleicons-8/K/Klook')
```



| Illustration | Klook |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/K/Klook.png) | ![illustration for Klook](../../simpleicons-8/K/Klook.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$KlookXs>`
- `<$KlookSm>`
- `<$KlookMd>`
- `<$KlookLg>`





## Klook

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Klook
include('simpleicons-8/K/Klook')

' renders the element
Klook('Klook', 'Klook', 'an optional tech label', 'an optional description')
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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Klook
include('simpleicons-8/K/Klook')

' renders the element
Klook('Klook', 'Klook', 'an optional tech label', 'an optional description')
@enduml
```

