# Kitsu


```text
simpleicons-14/K/Kitsu
```

```text
include('simpleicons-14/K/Kitsu')
```



| Illustration | Kitsu |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/K/Kitsu.png) | ![illustration for Kitsu](../../simpleicons-14/K/Kitsu.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$KitsuXs>`
- `<$KitsuSm>`
- `<$KitsuMd>`
- `<$KitsuLg>`





## Kitsu

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Kitsu
include('simpleicons-14/K/Kitsu')

' renders the element
Kitsu('Kitsu', 'Kitsu', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Kitsu
include('simpleicons-14/K/Kitsu')

' renders the element
Kitsu('Kitsu', 'Kitsu', 'an optional tech label', 'an optional description')
@enduml
```

