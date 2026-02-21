# Geopandas


```text
simpleicons/G/Geopandas
```

```text
include('simpleicons/G/Geopandas')
```



| Illustration | Geopandas |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/G/Geopandas.png) | ![illustration for Geopandas](../../simpleicons/G/Geopandas.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GeopandasXs>`
- `<$GeopandasSm>`
- `<$GeopandasMd>`
- `<$GeopandasLg>`





## Geopandas

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Geopandas
include('simpleicons/G/Geopandas')

' renders the element
Geopandas('Geopandas', 'Geopandas', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Geopandas
include('simpleicons/G/Geopandas')

' renders the element
Geopandas('Geopandas', 'Geopandas', 'an optional tech label', 'an optional description')
@enduml
```

