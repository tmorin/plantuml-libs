# ResetTv


```text
material/Device/ResetTv
```

```text
include('material/Device/ResetTv')
```



| Illustration | ResetTv |
| :---: | :---: |
| ![illustration for Illustration](../../material/Device/ResetTv.png) | ![illustration for ResetTv](../../material/Device/ResetTv.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ResetTvXs>`
- `<$ResetTvSm>`
- `<$ResetTvMd>`
- `<$ResetTvLg>`





## ResetTv

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element ResetTv
include('material/Device/ResetTv')

' renders the element
ResetTv('ResetTv', 'Reset Tv', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ResetTv
include('material/Device/ResetTv')

' renders the element
ResetTv('ResetTv', 'Reset Tv', 'an optional tech label', 'an optional description')
@enduml
```

