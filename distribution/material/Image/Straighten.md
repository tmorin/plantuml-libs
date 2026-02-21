# Straighten


```text
material/Image/Straighten
```

```text
include('material/Image/Straighten')
```



| Illustration | Straighten |
| :---: | :---: |
| ![illustration for Illustration](../../material/Image/Straighten.png) | ![illustration for Straighten](../../material/Image/Straighten.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$StraightenXs>`
- `<$StraightenSm>`
- `<$StraightenMd>`
- `<$StraightenLg>`





## Straighten

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element Straighten
include('material/Image/Straighten')

' renders the element
Straighten('Straighten', 'Straighten', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Straighten
include('material/Image/Straighten')

' renders the element
Straighten('Straighten', 'Straighten', 'an optional tech label', 'an optional description')
@enduml
```

