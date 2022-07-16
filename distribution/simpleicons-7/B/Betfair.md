# Betfair


```text
simpleicons-7/B/Betfair
```

```text
include('simpleicons-7/B/Betfair')
```



| Illustration | Betfair |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/B/Betfair.png) | ![illustration for Betfair](../../simpleicons-7/B/Betfair.Local.png) |




## Betfair

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Betfair
include('simpleicons-7/B/Betfair')

' renders the element
Betfair('Betfair', 'Betfair', 'an optional tech label')
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

' loads the Item which embeds the element Betfair
include('simpleicons-7/B/Betfair')

' renders the element
Betfair('Betfair', 'Betfair', 'an optional tech label')
@enduml
```

