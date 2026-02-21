# FiberNew


```text
material/Av/FiberNew
```

```text
include('material/Av/FiberNew')
```



| Illustration | FiberNew |
| :---: | :---: |
| ![illustration for Illustration](../../material/Av/FiberNew.png) | ![illustration for FiberNew](../../material/Av/FiberNew.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FiberNewXs>`
- `<$FiberNewSm>`
- `<$FiberNewMd>`
- `<$FiberNewLg>`





## FiberNew

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element FiberNew
include('material/Av/FiberNew')

' renders the element
FiberNew('FiberNew', 'Fiber New', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element FiberNew
include('material/Av/FiberNew')

' renders the element
FiberNew('FiberNew', 'Fiber New', 'an optional tech label', 'an optional description')
@enduml
```

