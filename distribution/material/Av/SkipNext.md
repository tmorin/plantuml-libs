# SkipNext


```text
material/Av/SkipNext
```

```text
include('material/Av/SkipNext')
```



| Illustration | SkipNext |
| :---: | :---: |
| ![illustration for Illustration](../../material/Av/SkipNext.png) | ![illustration for SkipNext](../../material/Av/SkipNext.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SkipNextXs>`
- `<$SkipNextSm>`
- `<$SkipNextMd>`
- `<$SkipNextLg>`





## SkipNext

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element SkipNext
include('material/Av/SkipNext')

' renders the element
SkipNext('SkipNext', 'Skip Next', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element SkipNext
include('material/Av/SkipNext')

' renders the element
SkipNext('SkipNext', 'Skip Next', 'an optional tech label', 'an optional description')
@enduml
```

