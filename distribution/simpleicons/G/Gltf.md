# Gltf


```text
simpleicons/G/Gltf
```

```text
include('simpleicons/G/Gltf')
```



| Illustration | Gltf |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/G/Gltf.png) | ![illustration for Gltf](../../simpleicons/G/Gltf.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GltfXs>`
- `<$GltfSm>`
- `<$GltfMd>`
- `<$GltfLg>`





## Gltf

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Gltf
include('simpleicons/G/Gltf')

' renders the element
Gltf('Gltf', 'Gltf', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Gltf
include('simpleicons/G/Gltf')

' renders the element
Gltf('Gltf', 'Gltf', 'an optional tech label', 'an optional description')
@enduml
```

