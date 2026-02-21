# Trilium


```text
simpleicons-14/T/Trilium
```

```text
include('simpleicons-14/T/Trilium')
```



| Illustration | Trilium |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/T/Trilium.png) | ![illustration for Trilium](../../simpleicons-14/T/Trilium.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TriliumXs>`
- `<$TriliumSm>`
- `<$TriliumMd>`
- `<$TriliumLg>`





## Trilium

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Trilium
include('simpleicons-14/T/Trilium')

' renders the element
Trilium('Trilium', 'Trilium', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Trilium
include('simpleicons-14/T/Trilium')

' renders the element
Trilium('Trilium', 'Trilium', 'an optional tech label', 'an optional description')
@enduml
```

