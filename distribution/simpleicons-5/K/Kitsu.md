# Kitsu


```text
simpleicons-5/K/Kitsu
```

```text
include('simpleicons-5/K/Kitsu')
```



| Illustration | Kitsu |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/K/Kitsu.png) | ![illustration for Kitsu](../../simpleicons-5/K/Kitsu.Local.png) |




## Kitsu

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Kitsu
include('simpleicons-5/K/Kitsu')

' renders the element
Kitsu('Kitsu', 'Kitsu', 'an optional tech label')
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

' loads the Item which embeds the element Kitsu
include('simpleicons-5/K/Kitsu')

' renders the element
Kitsu('Kitsu', 'Kitsu', 'an optional tech label')
@enduml
```

