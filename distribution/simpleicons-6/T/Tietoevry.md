# Tietoevry


```text
simpleicons-6/T/Tietoevry
```

```text
include('simpleicons-6/T/Tietoevry')
```



| Illustration | Tietoevry |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/T/Tietoevry.png) | ![illustration for Tietoevry](../../simpleicons-6/T/Tietoevry.Local.png) |




## Tietoevry

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Tietoevry
include('simpleicons-6/T/Tietoevry')

' renders the element
Tietoevry('Tietoevry', 'Tietoevry', 'an optional tech label')
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

' loads the Item which embeds the element Tietoevry
include('simpleicons-6/T/Tietoevry')

' renders the element
Tietoevry('Tietoevry', 'Tietoevry', 'an optional tech label')
@enduml
```

