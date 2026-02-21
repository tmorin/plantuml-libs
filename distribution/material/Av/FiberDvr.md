# FiberDvr


```text
material/Av/FiberDvr
```

```text
include('material/Av/FiberDvr')
```



| Illustration | FiberDvr |
| :---: | :---: |
| ![illustration for Illustration](../../material/Av/FiberDvr.png) | ![illustration for FiberDvr](../../material/Av/FiberDvr.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FiberDvrXs>`
- `<$FiberDvrSm>`
- `<$FiberDvrMd>`
- `<$FiberDvrLg>`





## FiberDvr

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element FiberDvr
include('material/Av/FiberDvr')

' renders the element
FiberDvr('FiberDvr', 'Fiber Dvr', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element FiberDvr
include('material/Av/FiberDvr')

' renders the element
FiberDvr('FiberDvr', 'Fiber Dvr', 'an optional tech label', 'an optional description')
@enduml
```

