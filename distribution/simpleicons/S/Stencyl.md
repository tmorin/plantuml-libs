# Stencyl


```text
simpleicons/S/Stencyl
```

```text
include('simpleicons/S/Stencyl')
```



| Illustration | Stencyl |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/S/Stencyl.png) | ![illustration for Stencyl](../../simpleicons/S/Stencyl.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$StencylXs>`
- `<$StencylSm>`
- `<$StencylMd>`
- `<$StencylLg>`





## Stencyl

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Stencyl
include('simpleicons/S/Stencyl')

' renders the element
Stencyl('Stencyl', 'Stencyl', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Stencyl
include('simpleicons/S/Stencyl')

' renders the element
Stencyl('Stencyl', 'Stencyl', 'an optional tech label', 'an optional description')
@enduml
```

