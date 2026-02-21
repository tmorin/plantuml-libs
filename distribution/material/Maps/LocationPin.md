# LocationPin


```text
material/Maps/LocationPin
```

```text
include('material/Maps/LocationPin')
```



| Illustration | LocationPin |
| :---: | :---: |
| ![illustration for Illustration](../../material/Maps/LocationPin.png) | ![illustration for LocationPin](../../material/Maps/LocationPin.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$LocationPinXs>`
- `<$LocationPinSm>`
- `<$LocationPinMd>`
- `<$LocationPinLg>`





## LocationPin

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element LocationPin
include('material/Maps/LocationPin')

' renders the element
LocationPin('LocationPin', 'Location Pin', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element LocationPin
include('material/Maps/LocationPin')

' renders the element
LocationPin('LocationPin', 'Location Pin', 'an optional tech label', 'an optional description')
@enduml
```

