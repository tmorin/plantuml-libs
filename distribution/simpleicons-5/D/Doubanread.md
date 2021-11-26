# Doubanread


```text
simpleicons-5/D/Doubanread
```

```text
include('simpleicons-5/D/Doubanread')
```



| Illustration | Doubanread |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/D/Doubanread.png) | ![illustration for Doubanread](../../simpleicons-5/D/Doubanread.Local.png) |




## Doubanread

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Doubanread
include('simpleicons-5/D/Doubanread')

' renders the element
Doubanread('Doubanread', 'Doubanread', 'an optional tech label')
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

' loads the Item which embeds the element Doubanread
include('simpleicons-5/D/Doubanread')

' renders the element
Doubanread('Doubanread', 'Doubanread', 'an optional tech label')
@enduml
```

