# Stencil


```text
simpleicons-14/S/Stencil
```

```text
include('simpleicons-14/S/Stencil')
```



| Illustration | Stencil |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/S/Stencil.png) | ![illustration for Stencil](../../simpleicons-14/S/Stencil.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$StencilXs>`
- `<$StencilSm>`
- `<$StencilMd>`
- `<$StencilLg>`





## Stencil

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Stencil
include('simpleicons-14/S/Stencil')

' renders the element
Stencil('Stencil', 'Stencil', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Stencil
include('simpleicons-14/S/Stencil')

' renders the element
Stencil('Stencil', 'Stencil', 'an optional tech label', 'an optional description')
@enduml
```

