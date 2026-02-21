# Attractions


```text
material/Maps/Attractions
```

```text
include('material/Maps/Attractions')
```



| Illustration | Attractions |
| :---: | :---: |
| ![illustration for Illustration](../../material/Maps/Attractions.png) | ![illustration for Attractions](../../material/Maps/Attractions.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AttractionsXs>`
- `<$AttractionsSm>`
- `<$AttractionsMd>`
- `<$AttractionsLg>`





## Attractions

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element Attractions
include('material/Maps/Attractions')

' renders the element
Attractions('Attractions', 'Attractions', 'an optional tech label', 'an optional description')
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
include('material/bootstrap')

' loads the Item which embeds the element Attractions
include('material/Maps/Attractions')

' renders the element
Attractions('Attractions', 'Attractions', 'an optional tech label', 'an optional description')
@enduml
```

