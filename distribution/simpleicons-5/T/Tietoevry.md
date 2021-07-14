# Tietoevry


```text
simpleicons-5/T/Tietoevry
```

```text
include('simpleicons-5/T/Tietoevry')
```



| Illustration | Tietoevry |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/T/Tietoevry.png) | ![illustration for Tietoevry](../../simpleicons-5/T/Tietoevry.Local.png) |




## Tietoevry

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Tietoevry
include('simpleicons-5/T/Tietoevry')

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
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Tietoevry
include('simpleicons-5/T/Tietoevry')

' renders the element
Tietoevry('Tietoevry', 'Tietoevry', 'an optional tech label')
@enduml
```

