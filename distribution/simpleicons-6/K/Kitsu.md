# Kitsu


```text
simpleicons-6/K/Kitsu
```

```text
include('simpleicons-6/K/Kitsu')
```



| Illustration | Kitsu |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/K/Kitsu.png) | ![illustration for Kitsu](../../simpleicons-6/K/Kitsu.Local.png) |




## Kitsu

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Kitsu
include('simpleicons-6/K/Kitsu')

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
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Kitsu
include('simpleicons-6/K/Kitsu')

' renders the element
Kitsu('Kitsu', 'Kitsu', 'an optional tech label')
@enduml
```

