# HotTub


```text
material/Places/HotTub
```

```text
include('material/Places/HotTub')
```



| Illustration | HotTub |
| :---: | :---: |
| ![illustration for Illustration](../../material/Places/HotTub.png) | ![illustration for HotTub](../../material/Places/HotTub.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$HotTubXs>`
- `<$HotTubSm>`
- `<$HotTubMd>`
- `<$HotTubLg>`





## HotTub

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element HotTub
include('material/Places/HotTub')

' renders the element
HotTub('HotTub', 'Hot Tub', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element HotTub
include('material/Places/HotTub')

' renders the element
HotTub('HotTub', 'Hot Tub', 'an optional tech label', 'an optional description')
@enduml
```

