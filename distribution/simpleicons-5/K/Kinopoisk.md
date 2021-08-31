# Kinopoisk


```text
simpleicons-5/K/Kinopoisk
```

```text
include('simpleicons-5/K/Kinopoisk')
```



| Illustration | Kinopoisk |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/K/Kinopoisk.png) | ![illustration for Kinopoisk](../../simpleicons-5/K/Kinopoisk.Local.png) |




## Kinopoisk

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Kinopoisk
include('simpleicons-5/K/Kinopoisk')

' renders the element
Kinopoisk('Kinopoisk', 'Kinopoisk', 'an optional tech label')
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
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Kinopoisk
include('simpleicons-5/K/Kinopoisk')

' renders the element
Kinopoisk('Kinopoisk', 'Kinopoisk', 'an optional tech label')
@enduml
```

