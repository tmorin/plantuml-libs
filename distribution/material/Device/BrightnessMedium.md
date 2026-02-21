# BrightnessMedium


```text
material/Device/BrightnessMedium
```

```text
include('material/Device/BrightnessMedium')
```



| Illustration | BrightnessMedium |
| :---: | :---: |
| ![illustration for Illustration](../../material/Device/BrightnessMedium.png) | ![illustration for BrightnessMedium](../../material/Device/BrightnessMedium.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BrightnessMediumXs>`
- `<$BrightnessMediumSm>`
- `<$BrightnessMediumMd>`
- `<$BrightnessMediumLg>`





## BrightnessMedium

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element BrightnessMedium
include('material/Device/BrightnessMedium')

' renders the element
BrightnessMedium('BrightnessMedium', 'Brightness Medium', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element BrightnessMedium
include('material/Device/BrightnessMedium')

' renders the element
BrightnessMedium('BrightnessMedium', 'Brightness Medium', 'an optional tech label', 'an optional description')
@enduml
```

