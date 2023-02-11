# Muller


```text
simpleicons-8/M/Muller
```

```text
include('simpleicons-8/M/Muller')
```



| Illustration | Muller |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/M/Muller.png) | ![illustration for Muller](../../simpleicons-8/M/Muller.Local.png) |




## Muller

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Muller
include('simpleicons-8/M/Muller')

' renders the element
Muller('Muller', 'Muller', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Muller
include('simpleicons-8/M/Muller')

' renders the element
Muller('Muller', 'Muller', 'an optional tech label', 'an optional description')
@enduml
```

