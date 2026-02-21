# Animalplanet


```text
simpleicons-14/A/Animalplanet
```

```text
include('simpleicons-14/A/Animalplanet')
```



| Illustration | Animalplanet |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/A/Animalplanet.png) | ![illustration for Animalplanet](../../simpleicons-14/A/Animalplanet.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AnimalplanetXs>`
- `<$AnimalplanetSm>`
- `<$AnimalplanetMd>`
- `<$AnimalplanetLg>`





## Animalplanet

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Animalplanet
include('simpleicons-14/A/Animalplanet')

' renders the element
Animalplanet('Animalplanet', 'Animalplanet', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Animalplanet
include('simpleicons-14/A/Animalplanet')

' renders the element
Animalplanet('Animalplanet', 'Animalplanet', 'an optional tech label', 'an optional description')
@enduml
```

