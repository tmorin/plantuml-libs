# Geant


```text
simpleicons-14/G/Geant
```

```text
include('simpleicons-14/G/Geant')
```



| Illustration | Geant |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/G/Geant.png) | ![illustration for Geant](../../simpleicons-14/G/Geant.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GeantXs>`
- `<$GeantSm>`
- `<$GeantMd>`
- `<$GeantLg>`





## Geant

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Geant
include('simpleicons-14/G/Geant')

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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Geant
include('simpleicons-14/G/Geant')

' renders the element
Geant('Geant', 'Geant', 'an optional tech label', 'an optional description')
@enduml
```

