# Magasinsu


```text
simpleicons/M/Magasinsu
```

```text
include('simpleicons/M/Magasinsu')
```



| Illustration | Magasinsu |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/M/Magasinsu.png) | ![illustration for Magasinsu](../../simpleicons/M/Magasinsu.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MagasinsuXs>`
- `<$MagasinsuSm>`
- `<$MagasinsuMd>`
- `<$MagasinsuLg>`





## Magasinsu

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Magasinsu
include('simpleicons/M/Magasinsu')

' renders the element
Magasinsu('Magasinsu', 'Magasinsu', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Magasinsu
include('simpleicons/M/Magasinsu')

' renders the element
Magasinsu('Magasinsu', 'Magasinsu', 'an optional tech label', 'an optional description')
@enduml
```

