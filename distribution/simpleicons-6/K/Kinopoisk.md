# Kinopoisk


```text
simpleicons-6/K/Kinopoisk
```

```text
include('simpleicons-6/K/Kinopoisk')
```



| Illustration | Kinopoisk |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/K/Kinopoisk.png) | ![illustration for Kinopoisk](../../simpleicons-6/K/Kinopoisk.Local.png) |




## Kinopoisk

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Kinopoisk
include('simpleicons-6/K/Kinopoisk')

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
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Kinopoisk
include('simpleicons-6/K/Kinopoisk')

' renders the element
Kinopoisk('Kinopoisk', 'Kinopoisk', 'an optional tech label')
@enduml
```

