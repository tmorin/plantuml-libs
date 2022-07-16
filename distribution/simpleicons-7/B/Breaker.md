# Breaker


```text
simpleicons-7/B/Breaker
```

```text
include('simpleicons-7/B/Breaker')
```



| Illustration | Breaker |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/B/Breaker.png) | ![illustration for Breaker](../../simpleicons-7/B/Breaker.Local.png) |




## Breaker

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Breaker
include('simpleicons-7/B/Breaker')

' renders the element
Breaker('Breaker', 'Breaker', 'an optional tech label')
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

' loads the Item which embeds the element Breaker
include('simpleicons-7/B/Breaker')

' renders the element
Breaker('Breaker', 'Breaker', 'an optional tech label')
@enduml
```

