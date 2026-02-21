# PersonPin


```text
material/Maps/PersonPin
```

```text
include('material/Maps/PersonPin')
```



| Illustration | PersonPin |
| :---: | :---: |
| ![illustration for Illustration](../../material/Maps/PersonPin.png) | ![illustration for PersonPin](../../material/Maps/PersonPin.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PersonPinXs>`
- `<$PersonPinSm>`
- `<$PersonPinMd>`
- `<$PersonPinLg>`





## PersonPin

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element PersonPin
include('material/Maps/PersonPin')

' renders the element
PersonPin('PersonPin', 'Person Pin', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element PersonPin
include('material/Maps/PersonPin')

' renders the element
PersonPin('PersonPin', 'Person Pin', 'an optional tech label', 'an optional description')
@enduml
```

