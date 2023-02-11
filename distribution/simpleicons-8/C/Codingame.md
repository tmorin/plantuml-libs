# Codingame


```text
simpleicons-8/C/Codingame
```

```text
include('simpleicons-8/C/Codingame')
```



| Illustration | Codingame |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/C/Codingame.png) | ![illustration for Codingame](../../simpleicons-8/C/Codingame.Local.png) |




## Codingame

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Codingame
include('simpleicons-8/C/Codingame')

' renders the element
Codingame('Codingame', 'Codingame', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Codingame
include('simpleicons-8/C/Codingame')

' renders the element
Codingame('Codingame', 'Codingame', 'an optional tech label', 'an optional description')
@enduml
```

