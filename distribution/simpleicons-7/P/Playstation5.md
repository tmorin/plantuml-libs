# Playstation5


```text
simpleicons-7/P/Playstation5
```

```text
include('simpleicons-7/P/Playstation5')
```



| Illustration | Playstation5 |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/P/Playstation5.png) | ![illustration for Playstation5](../../simpleicons-7/P/Playstation5.Local.png) |




## Playstation5

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Playstation5
include('simpleicons-7/P/Playstation5')

' renders the element
Playstation5('Playstation5', 'Playstation5', 'an optional tech label', 'an optional description')
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
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Playstation5
include('simpleicons-7/P/Playstation5')

' renders the element
Playstation5('Playstation5', 'Playstation5', 'an optional tech label', 'an optional description')
@enduml
```

