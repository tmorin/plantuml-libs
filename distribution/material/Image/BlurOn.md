# BlurOn


```text
material/Image/BlurOn
```

```text
include('material/Image/BlurOn')
```



| Illustration | BlurOn |
| :---: | :---: |
| ![illustration for Illustration](../../material/Image/BlurOn.png) | ![illustration for BlurOn](../../material/Image/BlurOn.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BlurOnXs>`
- `<$BlurOnSm>`
- `<$BlurOnMd>`
- `<$BlurOnLg>`





## BlurOn

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element BlurOn
include('material/Image/BlurOn')

' renders the element
BlurOn('BlurOn', 'Blur On', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element BlurOn
include('material/Image/BlurOn')

' renders the element
BlurOn('BlurOn', 'Blur On', 'an optional tech label', 'an optional description')
@enduml
```

