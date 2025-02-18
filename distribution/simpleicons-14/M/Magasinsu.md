# Magasinsu


```text
simpleicons-14/M/Magasinsu
```

```text
include('simpleicons-14/M/Magasinsu')
```



| Illustration | Magasinsu |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/M/Magasinsu.png) | ![illustration for Magasinsu](../../simpleicons-14/M/Magasinsu.Local.png) |



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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Magasinsu
include('simpleicons-14/M/Magasinsu')

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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Magasinsu
include('simpleicons-14/M/Magasinsu')

' renders the element
Magasinsu('Magasinsu', 'Magasinsu', 'an optional tech label', 'an optional description')
@enduml
```

