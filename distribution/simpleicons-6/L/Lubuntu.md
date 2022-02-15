# Lubuntu


```text
simpleicons-6/L/Lubuntu
```

```text
include('simpleicons-6/L/Lubuntu')
```



| Illustration | Lubuntu |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/L/Lubuntu.png) | ![illustration for Lubuntu](../../simpleicons-6/L/Lubuntu.Local.png) |




## Lubuntu

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Lubuntu
include('simpleicons-6/L/Lubuntu')

' renders the element
Lubuntu('Lubuntu', 'Lubuntu', 'an optional tech label')
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

' loads the Item which embeds the element Lubuntu
include('simpleicons-6/L/Lubuntu')

' renders the element
Lubuntu('Lubuntu', 'Lubuntu', 'an optional tech label')
@enduml
```

