# Lubuntu


```text
simpleicons-7/L/Lubuntu
```

```text
include('simpleicons-7/L/Lubuntu')
```



| Illustration | Lubuntu |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/L/Lubuntu.png) | ![illustration for Lubuntu](../../simpleicons-7/L/Lubuntu.Local.png) |




## Lubuntu

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Lubuntu
include('simpleicons-7/L/Lubuntu')

' renders the element
Lubuntu('Lubuntu', 'Lubuntu', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Lubuntu
include('simpleicons-7/L/Lubuntu')

' renders the element
Lubuntu('Lubuntu', 'Lubuntu', 'an optional tech label', 'an optional description')
@enduml
```

