# Flip


```text
material/Image/Flip
```

```text
include('material/Image/Flip')
```



| Illustration | Flip |
| :---: | :---: |
| ![illustration for Illustration](../../material/Image/Flip.png) | ![illustration for Flip](../../material/Image/Flip.Local.png) |



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
include('material/bootstrap')

' loads the Item which embeds the element Flip
include('material/Image/Flip')

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
include('material/bootstrap')

' loads the Item which embeds the element Flip
include('material/Image/Flip')

' renders the element
Flip('Flip', 'Flip', 'an optional tech label', 'an optional description')
@enduml
```

