# Betfair


```text
simpleicons-5/B/Betfair
```

```text
include('simpleicons-5/B/Betfair')
```



| Illustration | Betfair |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/B/Betfair.png) | ![illustration for Betfair](../../simpleicons-5/B/Betfair.Local.png) |




## Betfair

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Betfair
include('simpleicons-5/B/Betfair')

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
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Betfair
include('simpleicons-5/B/Betfair')

' renders the element
Betfair('Betfair', 'Betfair', 'an optional tech label')
@enduml
```

