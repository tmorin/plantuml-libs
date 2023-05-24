# Osgeo


```text
simpleicons-8/O/Osgeo
```

```text
include('simpleicons-8/O/Osgeo')
```



| Illustration | Osgeo |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/O/Osgeo.png) | ![illustration for Osgeo](../../simpleicons-8/O/Osgeo.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$OsgeoXs>`
- `<$OsgeoSm>`
- `<$OsgeoMd>`
- `<$OsgeoLg>`





## Osgeo

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Osgeo
include('simpleicons-8/O/Osgeo')

' renders the element
Osgeo('Osgeo', 'Osgeo', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Osgeo
include('simpleicons-8/O/Osgeo')

' renders the element
Osgeo('Osgeo', 'Osgeo', 'an optional tech label', 'an optional description')
@enduml
```

