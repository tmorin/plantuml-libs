# Geant


```text
simpleicons-7/G/Geant
```

```text
include('simpleicons-7/G/Geant')
```



| Illustration | Geant |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/G/Geant.png) | ![illustration for Geant](../../simpleicons-7/G/Geant.Local.png) |




## Geant

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Geant
include('simpleicons-7/G/Geant')

' renders the element
Geant('Geant', 'Geant', 'an optional tech label')
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

' loads the Item which embeds the element Geant
include('simpleicons-7/G/Geant')

' renders the element
Geant('Geant', 'Geant', 'an optional tech label')
@enduml
```

