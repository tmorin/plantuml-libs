# LeakRemove


```text
material/Image/LeakRemove
```

```text
include('material/Image/LeakRemove')
```



| Illustration | LeakRemove |
| :---: | :---: |
| ![illustration for Illustration](../../material/Image/LeakRemove.png) | ![illustration for LeakRemove](../../material/Image/LeakRemove.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$LeakRemoveXs>`
- `<$LeakRemoveSm>`
- `<$LeakRemoveMd>`
- `<$LeakRemoveLg>`





## LeakRemove

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element LeakRemove
include('material/Image/LeakRemove')

' renders the element
LeakRemove('LeakRemove', 'Leak Remove', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element LeakRemove
include('material/Image/LeakRemove')

' renders the element
LeakRemove('LeakRemove', 'Leak Remove', 'an optional tech label', 'an optional description')
@enduml
```

