# Microstrategy


```text
simpleicons-6/M/Microstrategy
```

```text
include('simpleicons-6/M/Microstrategy')
```



| Illustration | Microstrategy |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/M/Microstrategy.png) | ![illustration for Microstrategy](../../simpleicons-6/M/Microstrategy.Local.png) |




## Microstrategy

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Microstrategy
include('simpleicons-6/M/Microstrategy')

' renders the element
Microstrategy('Microstrategy', 'Microstrategy', 'an optional tech label')
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

' loads the Item which embeds the element Microstrategy
include('simpleicons-6/M/Microstrategy')

' renders the element
Microstrategy('Microstrategy', 'Microstrategy', 'an optional tech label')
@enduml
```

