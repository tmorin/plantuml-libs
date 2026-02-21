# ViewArray


```text
material/Action/ViewArray
```

```text
include('material/Action/ViewArray')
```



| Illustration | ViewArray |
| :---: | :---: |
| ![illustration for Illustration](../../material/Action/ViewArray.png) | ![illustration for ViewArray](../../material/Action/ViewArray.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ViewArrayXs>`
- `<$ViewArraySm>`
- `<$ViewArrayMd>`
- `<$ViewArrayLg>`





## ViewArray

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element ViewArray
include('material/Action/ViewArray')

' renders the element
ViewArray('ViewArray', 'View Array', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ViewArray
include('material/Action/ViewArray')

' renders the element
ViewArray('ViewArray', 'View Array', 'an optional tech label', 'an optional description')
@enduml
```

