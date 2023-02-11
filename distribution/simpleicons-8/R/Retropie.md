# Retropie


```text
simpleicons-8/R/Retropie
```

```text
include('simpleicons-8/R/Retropie')
```



| Illustration | Retropie |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/R/Retropie.png) | ![illustration for Retropie](../../simpleicons-8/R/Retropie.Local.png) |




## Retropie

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Retropie
include('simpleicons-8/R/Retropie')

' renders the element
Retropie('Retropie', 'Retropie', 'an optional tech label', 'an optional description')
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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Retropie
include('simpleicons-8/R/Retropie')

' renders the element
Retropie('Retropie', 'Retropie', 'an optional tech label', 'an optional description')
@enduml
```

