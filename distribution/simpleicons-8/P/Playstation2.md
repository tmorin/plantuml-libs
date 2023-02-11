# Playstation2


```text
simpleicons-8/P/Playstation2
```

```text
include('simpleicons-8/P/Playstation2')
```



| Illustration | Playstation2 |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/P/Playstation2.png) | ![illustration for Playstation2](../../simpleicons-8/P/Playstation2.Local.png) |




## Playstation2

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Playstation2
include('simpleicons-8/P/Playstation2')

' renders the element
Playstation2('Playstation2', 'Playstation2', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Playstation2
include('simpleicons-8/P/Playstation2')

' renders the element
Playstation2('Playstation2', 'Playstation2', 'an optional tech label', 'an optional description')
@enduml
```

