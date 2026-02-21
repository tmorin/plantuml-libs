# DirtyLens


```text
material/Image/DirtyLens
```

```text
include('material/Image/DirtyLens')
```



| Illustration | DirtyLens |
| :---: | :---: |
| ![illustration for Illustration](../../material/Image/DirtyLens.png) | ![illustration for DirtyLens](../../material/Image/DirtyLens.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DirtyLensXs>`
- `<$DirtyLensSm>`
- `<$DirtyLensMd>`
- `<$DirtyLensLg>`





## DirtyLens

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element DirtyLens
include('material/Image/DirtyLens')

' renders the element
DirtyLens('DirtyLens', 'Dirty Lens', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element DirtyLens
include('material/Image/DirtyLens')

' renders the element
DirtyLens('DirtyLens', 'Dirty Lens', 'an optional tech label', 'an optional description')
@enduml
```

