# Gamejolt


```text
simpleicons/G/Gamejolt
```

```text
include('simpleicons/G/Gamejolt')
```



| Illustration | Gamejolt |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/G/Gamejolt.png) | ![illustration for Gamejolt](../../simpleicons/G/Gamejolt.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GamejoltXs>`
- `<$GamejoltSm>`
- `<$GamejoltMd>`
- `<$GamejoltLg>`





## Gamejolt

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Gamejolt
include('simpleicons/G/Gamejolt')

' renders the element
Gamejolt('Gamejolt', 'Gamejolt', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Gamejolt
include('simpleicons/G/Gamejolt')

' renders the element
Gamejolt('Gamejolt', 'Gamejolt', 'an optional tech label', 'an optional description')
@enduml
```

