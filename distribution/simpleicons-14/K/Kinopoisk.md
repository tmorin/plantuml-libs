# Kinopoisk


```text
simpleicons-14/K/Kinopoisk
```

```text
include('simpleicons-14/K/Kinopoisk')
```



| Illustration | Kinopoisk |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/K/Kinopoisk.png) | ![illustration for Kinopoisk](../../simpleicons-14/K/Kinopoisk.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$KinopoiskXs>`
- `<$KinopoiskSm>`
- `<$KinopoiskMd>`
- `<$KinopoiskLg>`





## Kinopoisk

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Kinopoisk
include('simpleicons-14/K/Kinopoisk')

' renders the element
Kinopoisk('Kinopoisk', 'Kinopoisk', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Kinopoisk
include('simpleicons-14/K/Kinopoisk')

' renders the element
Kinopoisk('Kinopoisk', 'Kinopoisk', 'an optional tech label', 'an optional description')
@enduml
```

