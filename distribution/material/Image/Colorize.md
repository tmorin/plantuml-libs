# Colorize


```text
material/Image/Colorize
```

```text
include('material/Image/Colorize')
```



| Illustration | Colorize |
| :---: | :---: |
| ![illustration for Illustration](../../material/Image/Colorize.png) | ![illustration for Colorize](../../material/Image/Colorize.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ColorizeXs>`
- `<$ColorizeSm>`
- `<$ColorizeMd>`
- `<$ColorizeLg>`





## Colorize

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element Colorize
include('material/Image/Colorize')

' renders the element
Colorize('Colorize', 'Colorize', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Colorize
include('material/Image/Colorize')

' renders the element
Colorize('Colorize', 'Colorize', 'an optional tech label', 'an optional description')
@enduml
```

