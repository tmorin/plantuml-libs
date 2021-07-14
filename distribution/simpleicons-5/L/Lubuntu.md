# Lubuntu


```text
simpleicons-5/L/Lubuntu
```

```text
include('simpleicons-5/L/Lubuntu')
```



| Illustration | Lubuntu |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/L/Lubuntu.png) | ![illustration for Lubuntu](../../simpleicons-5/L/Lubuntu.Local.png) |




## Lubuntu

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Lubuntu
include('simpleicons-5/L/Lubuntu')

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
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Lubuntu
include('simpleicons-5/L/Lubuntu')

' renders the element
Lubuntu('Lubuntu', 'Lubuntu', 'an optional tech label')
@enduml
```

