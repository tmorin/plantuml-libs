# Hackster


```text
simpleicons-5/H/Hackster
```

```text
include('simpleicons-5/H/Hackster')
```



| Illustration | Hackster |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/H/Hackster.png) | ![illustration for Hackster](../../simpleicons-5/H/Hackster.Local.png) |




## Hackster

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Hackster
include('simpleicons-5/H/Hackster')

' renders the element
Hackster('Hackster', 'Hackster', 'an optional tech label')
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

' loads the Item which embeds the element Hackster
include('simpleicons-5/H/Hackster')

' renders the element
Hackster('Hackster', 'Hackster', 'an optional tech label')
@enduml
```

