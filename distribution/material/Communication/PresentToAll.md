# PresentToAll


```text
material/Communication/PresentToAll
```

```text
include('material/Communication/PresentToAll')
```



| Illustration | PresentToAll |
| :---: | :---: |
| ![illustration for Illustration](../../material/Communication/PresentToAll.png) | ![illustration for PresentToAll](../../material/Communication/PresentToAll.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PresentToAllXs>`
- `<$PresentToAllSm>`
- `<$PresentToAllMd>`
- `<$PresentToAllLg>`





## PresentToAll

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element PresentToAll
include('material/Communication/PresentToAll')

' renders the element
PresentToAll('PresentToAll', 'Present To All', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element PresentToAll
include('material/Communication/PresentToAll')

' renders the element
PresentToAll('PresentToAll', 'Present To All', 'an optional tech label', 'an optional description')
@enduml
```

