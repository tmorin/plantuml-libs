# Applearcade


```text
simpleicons-6/A/Applearcade
```

```text
include('simpleicons-6/A/Applearcade')
```



| Illustration | Applearcade |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/A/Applearcade.png) | ![illustration for Applearcade](../../simpleicons-6/A/Applearcade.Local.png) |




## Applearcade

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Applearcade
include('simpleicons-6/A/Applearcade')

' renders the element
Applearcade('Applearcade', 'Applearcade', 'an optional tech label')
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

' loads the Item which embeds the element Applearcade
include('simpleicons-6/A/Applearcade')

' renders the element
Applearcade('Applearcade', 'Applearcade', 'an optional tech label')
@enduml
```

