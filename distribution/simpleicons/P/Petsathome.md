# Petsathome


```text
simpleicons/P/Petsathome
```

```text
include('simpleicons/P/Petsathome')
```



| Illustration | Petsathome |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/P/Petsathome.png) | ![illustration for Petsathome](../../simpleicons/P/Petsathome.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PetsathomeXs>`
- `<$PetsathomeSm>`
- `<$PetsathomeMd>`
- `<$PetsathomeLg>`





## Petsathome

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Petsathome
include('simpleicons/P/Petsathome')

' renders the element
Petsathome('Petsathome', 'Petsathome', 'an optional tech label', 'an optional description')
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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Petsathome
include('simpleicons/P/Petsathome')

' renders the element
Petsathome('Petsathome', 'Petsathome', 'an optional tech label', 'an optional description')
@enduml
```

