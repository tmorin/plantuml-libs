# Kahoot


```text
simpleicons-8/K/Kahoot
```

```text
include('simpleicons-8/K/Kahoot')
```



| Illustration | Kahoot |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/K/Kahoot.png) | ![illustration for Kahoot](../../simpleicons-8/K/Kahoot.Local.png) |




## Kahoot

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Kahoot
include('simpleicons-8/K/Kahoot')

' renders the element
Kahoot('Kahoot', 'Kahoot', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Kahoot
include('simpleicons-8/K/Kahoot')

' renders the element
Kahoot('Kahoot', 'Kahoot', 'an optional tech label', 'an optional description')
@enduml
```

