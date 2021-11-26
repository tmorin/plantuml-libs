# Paloaltosoftware


```text
simpleicons-5/P/Paloaltosoftware
```

```text
include('simpleicons-5/P/Paloaltosoftware')
```



| Illustration | Paloaltosoftware |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/P/Paloaltosoftware.png) | ![illustration for Paloaltosoftware](../../simpleicons-5/P/Paloaltosoftware.Local.png) |




## Paloaltosoftware

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Paloaltosoftware
include('simpleicons-5/P/Paloaltosoftware')

' renders the element
Paloaltosoftware('Paloaltosoftware', 'Paloaltosoftware', 'an optional tech label')
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

' loads the Item which embeds the element Paloaltosoftware
include('simpleicons-5/P/Paloaltosoftware')

' renders the element
Paloaltosoftware('Paloaltosoftware', 'Paloaltosoftware', 'an optional tech label')
@enduml
```

