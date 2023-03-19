# Flip


```text
material-4/Image/Flip
```

```text
include('material-4/Image/Flip')
```



| Illustration | Flip |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Image/Flip.png) | ![illustration for Flip](../../material-4/Image/Flip.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FlipXs>`
- `<$FlipSm>`
- `<$FlipMd>`
- `<$FlipLg>`





## Flip

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Flip
include('material-4/Image/Flip')

' renders the element
Flip('Flip', 'Flip', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Flip
include('material-4/Image/Flip')

' renders the element
Flip('Flip', 'Flip', 'an optional tech label', 'an optional description')
@enduml
```

