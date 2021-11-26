# Bookmeter


```text
simpleicons-5/B/Bookmeter
```

```text
include('simpleicons-5/B/Bookmeter')
```



| Illustration | Bookmeter |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/B/Bookmeter.png) | ![illustration for Bookmeter](../../simpleicons-5/B/Bookmeter.Local.png) |




## Bookmeter

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Bookmeter
include('simpleicons-5/B/Bookmeter')

' renders the element
Bookmeter('Bookmeter', 'Bookmeter', 'an optional tech label')
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

' loads the Item which embeds the element Bookmeter
include('simpleicons-5/B/Bookmeter')

' renders the element
Bookmeter('Bookmeter', 'Bookmeter', 'an optional tech label')
@enduml
```

