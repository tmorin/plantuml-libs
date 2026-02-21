# Gradient


```text
material/Image/Gradient
```

```text
include('material/Image/Gradient')
```



| Illustration | Gradient |
| :---: | :---: |
| ![illustration for Illustration](../../material/Image/Gradient.png) | ![illustration for Gradient](../../material/Image/Gradient.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GradientXs>`
- `<$GradientSm>`
- `<$GradientMd>`
- `<$GradientLg>`





## Gradient

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element Gradient
include('material/Image/Gradient')

' renders the element
Gradient('Gradient', 'Gradient', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Gradient
include('material/Image/Gradient')

' renders the element
Gradient('Gradient', 'Gradient', 'an optional tech label', 'an optional description')
@enduml
```

