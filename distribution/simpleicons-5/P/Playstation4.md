# Playstation4


```text
simpleicons-5/P/Playstation4
```

```text
include('simpleicons-5/P/Playstation4')
```



| Illustration | Playstation4 |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/P/Playstation4.png) | ![illustration for Playstation4](../../simpleicons-5/P/Playstation4.Local.png) |




## Playstation4

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Playstation4
include('simpleicons-5/P/Playstation4')

' renders the element
Playstation4('Playstation4', 'Playstation4', 'an optional tech label')
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

' loads the Item which embeds the element Playstation4
include('simpleicons-5/P/Playstation4')

' renders the element
Playstation4('Playstation4', 'Playstation4', 'an optional tech label')
@enduml
```

