# Breaker


```text
simpleicons-14/B/Breaker
```

```text
include('simpleicons-14/B/Breaker')
```



| Illustration | Breaker |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/B/Breaker.png) | ![illustration for Breaker](../../simpleicons-14/B/Breaker.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BreakerXs>`
- `<$BreakerSm>`
- `<$BreakerMd>`
- `<$BreakerLg>`





## Breaker

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Breaker
include('simpleicons-14/B/Breaker')

' renders the element
Breaker('Breaker', 'Breaker', 'an optional tech label', 'an optional description')
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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Breaker
include('simpleicons-14/B/Breaker')

' renders the element
Breaker('Breaker', 'Breaker', 'an optional tech label', 'an optional description')
@enduml
```

