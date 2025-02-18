# Lens


```text
simpleicons-14/L/Lens
```

```text
include('simpleicons-14/L/Lens')
```



| Illustration | Lens |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/L/Lens.png) | ![illustration for Lens](../../simpleicons-14/L/Lens.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$LensXs>`
- `<$LensSm>`
- `<$LensMd>`
- `<$LensLg>`





## Lens

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Lens
include('simpleicons-14/L/Lens')

' renders the element
Lens('Lens', 'Lens', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Lens
include('simpleicons-14/L/Lens')

' renders the element
Lens('Lens', 'Lens', 'an optional tech label', 'an optional description')
@enduml
```

