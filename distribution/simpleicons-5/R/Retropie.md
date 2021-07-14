# Retropie


```text
simpleicons-5/R/Retropie
```

```text
include('simpleicons-5/R/Retropie')
```



| Illustration | Retropie |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/R/Retropie.png) | ![illustration for Retropie](../../simpleicons-5/R/Retropie.Local.png) |




## Retropie

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Retropie
include('simpleicons-5/R/Retropie')

' renders the element
Retropie('Retropie', 'Retropie', 'an optional tech label')
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

' loads the Item which embeds the element Retropie
include('simpleicons-5/R/Retropie')

' renders the element
Retropie('Retropie', 'Retropie', 'an optional tech label')
@enduml
```

