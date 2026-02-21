# Vignette


```text
material/Image/Vignette
```

```text
include('material/Image/Vignette')
```



| Illustration | Vignette |
| :---: | :---: |
| ![illustration for Illustration](../../material/Image/Vignette.png) | ![illustration for Vignette](../../material/Image/Vignette.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$VignetteXs>`
- `<$VignetteSm>`
- `<$VignetteMd>`
- `<$VignetteLg>`





## Vignette

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element Vignette
include('material/Image/Vignette')

' renders the element
Vignette('Vignette', 'Vignette', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Vignette
include('material/Image/Vignette')

' renders the element
Vignette('Vignette', 'Vignette', 'an optional tech label', 'an optional description')
@enduml
```

