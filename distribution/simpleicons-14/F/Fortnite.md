# Fortnite


```text
simpleicons-14/F/Fortnite
```

```text
include('simpleicons-14/F/Fortnite')
```



| Illustration | Fortnite |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/F/Fortnite.png) | ![illustration for Fortnite](../../simpleicons-14/F/Fortnite.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FortniteXs>`
- `<$FortniteSm>`
- `<$FortniteMd>`
- `<$FortniteLg>`





## Fortnite

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Fortnite
include('simpleicons-14/F/Fortnite')

' renders the element
Fortnite('Fortnite', 'Fortnite', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Fortnite
include('simpleicons-14/F/Fortnite')

' renders the element
Fortnite('Fortnite', 'Fortnite', 'an optional tech label', 'an optional description')
@enduml
```

