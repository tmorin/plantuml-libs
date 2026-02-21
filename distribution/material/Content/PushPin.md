# PushPin


```text
material/Content/PushPin
```

```text
include('material/Content/PushPin')
```



| Illustration | PushPin |
| :---: | :---: |
| ![illustration for Illustration](../../material/Content/PushPin.png) | ![illustration for PushPin](../../material/Content/PushPin.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PushPinXs>`
- `<$PushPinSm>`
- `<$PushPinMd>`
- `<$PushPinLg>`





## PushPin

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element PushPin
include('material/Content/PushPin')

' renders the element
PushPin('PushPin', 'Push Pin', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element PushPin
include('material/Content/PushPin')

' renders the element
PushPin('PushPin', 'Push Pin', 'an optional tech label', 'an optional description')
@enduml
```

