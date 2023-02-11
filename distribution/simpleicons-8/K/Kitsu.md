# Kitsu


```text
simpleicons-8/K/Kitsu
```

```text
include('simpleicons-8/K/Kitsu')
```



| Illustration | Kitsu |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/K/Kitsu.png) | ![illustration for Kitsu](../../simpleicons-8/K/Kitsu.Local.png) |




## Kitsu

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Kitsu
include('simpleicons-8/K/Kitsu')

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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Kitsu
include('simpleicons-8/K/Kitsu')

' renders the element
Kitsu('Kitsu', 'Kitsu', 'an optional tech label', 'an optional description')
@enduml
```

