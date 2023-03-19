# HdrStrong


```text
material-4/Image/HdrStrong
```

```text
include('material-4/Image/HdrStrong')
```



| Illustration | HdrStrong |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Image/HdrStrong.png) | ![illustration for HdrStrong](../../material-4/Image/HdrStrong.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$HdrStrongXs>`
- `<$HdrStrongSm>`
- `<$HdrStrongMd>`
- `<$HdrStrongLg>`





## HdrStrong

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element HdrStrong
include('material-4/Image/HdrStrong')

' renders the element
HdrStrong('HdrStrong', 'Hdr Strong', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element HdrStrong
include('material-4/Image/HdrStrong')

' renders the element
HdrStrong('HdrStrong', 'Hdr Strong', 'an optional tech label', 'an optional description')
@enduml
```

