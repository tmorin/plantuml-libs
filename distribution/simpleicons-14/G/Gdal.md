# Gdal


```text
simpleicons-14/G/Gdal
```

```text
include('simpleicons-14/G/Gdal')
```



| Illustration | Gdal |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/G/Gdal.png) | ![illustration for Gdal](../../simpleicons-14/G/Gdal.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GdalXs>`
- `<$GdalSm>`
- `<$GdalMd>`
- `<$GdalLg>`





## Gdal

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Gdal
include('simpleicons-14/G/Gdal')

' renders the element
Gdal('Gdal', 'Gdal', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Gdal
include('simpleicons-14/G/Gdal')

' renders the element
Gdal('Gdal', 'Gdal', 'an optional tech label', 'an optional description')
@enduml
```

