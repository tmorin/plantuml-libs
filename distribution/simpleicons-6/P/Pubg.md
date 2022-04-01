# Pubg


```text
simpleicons-6/P/Pubg
```

```text
include('simpleicons-6/P/Pubg')
```



| Illustration | Pubg |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/P/Pubg.png) | ![illustration for Pubg](../../simpleicons-6/P/Pubg.Local.png) |




## Pubg

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Pubg
include('simpleicons-6/P/Pubg')

' renders the element
Pubg('Pubg', 'Pubg', 'an optional tech label')
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

' loads the Item which embeds the element Pubg
include('simpleicons-6/P/Pubg')

' renders the element
Pubg('Pubg', 'Pubg', 'an optional tech label')
@enduml
```

