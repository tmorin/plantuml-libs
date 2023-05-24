# Esri


```text
simpleicons-8/E/Esri
```

```text
include('simpleicons-8/E/Esri')
```



| Illustration | Esri |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/E/Esri.png) | ![illustration for Esri](../../simpleicons-8/E/Esri.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$EsriXs>`
- `<$EsriSm>`
- `<$EsriMd>`
- `<$EsriLg>`





## Esri

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Esri
include('simpleicons-8/E/Esri')

' renders the element
Esri('Esri', 'Esri', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Esri
include('simpleicons-8/E/Esri')

' renders the element
Esri('Esri', 'Esri', 'an optional tech label', 'an optional description')
@enduml
```

