# Pets


```text
material-4/Action/Pets
```

```text
include('material-4/Action/Pets')
```



| Illustration | Pets |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/Pets.png) | ![illustration for Pets](../../material-4/Action/Pets.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PetsXs>`
- `<$PetsSm>`
- `<$PetsMd>`
- `<$PetsLg>`





## Pets

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Pets
include('material-4/Action/Pets')

' renders the element
Pets('Pets', 'Pets', 'an optional tech label', 'an optional description')
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
include('material-4/bootstrap')

' loads the Item which embeds the element Pets
include('material-4/Action/Pets')

' renders the element
Pets('Pets', 'Pets', 'an optional tech label', 'an optional description')
@enduml
```

