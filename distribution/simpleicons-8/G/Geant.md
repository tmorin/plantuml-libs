# Geant


```text
simpleicons-8/G/Geant
```

```text
include('simpleicons-8/G/Geant')
```



| Illustration | Geant |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/G/Geant.png) | ![illustration for Geant](../../simpleicons-8/G/Geant.Local.png) |




## Geant

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Geant
include('simpleicons-8/G/Geant')

' renders the element
Geant('Geant', 'Geant', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Geant
include('simpleicons-8/G/Geant')

' renders the element
Geant('Geant', 'Geant', 'an optional tech label', 'an optional description')
@enduml
```

