# Byjus


```text
simpleicons-8/B/Byjus
```

```text
include('simpleicons-8/B/Byjus')
```



| Illustration | Byjus |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/B/Byjus.png) | ![illustration for Byjus](../../simpleicons-8/B/Byjus.Local.png) |




## Byjus

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Byjus
include('simpleicons-8/B/Byjus')

' renders the element
Byjus('Byjus', 'Byjus', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Byjus
include('simpleicons-8/B/Byjus')

' renders the element
Byjus('Byjus', 'Byjus', 'an optional tech label', 'an optional description')
@enduml
```

