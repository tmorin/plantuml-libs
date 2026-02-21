# Flare


```text
material/Image/Flare
```

```text
include('material/Image/Flare')
```



| Illustration | Flare |
| :---: | :---: |
| ![illustration for Illustration](../../material/Image/Flare.png) | ![illustration for Flare](../../material/Image/Flare.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FlareXs>`
- `<$FlareSm>`
- `<$FlareMd>`
- `<$FlareLg>`





## Flare

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element Flare
include('material/Image/Flare')

' renders the element
Flare('Flare', 'Flare', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Flare
include('material/Image/Flare')

' renders the element
Flare('Flare', 'Flare', 'an optional tech label', 'an optional description')
@enduml
```

