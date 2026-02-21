# AutoDelete


```text
material/Alert/AutoDelete
```

```text
include('material/Alert/AutoDelete')
```



| Illustration | AutoDelete |
| :---: | :---: |
| ![illustration for Illustration](../../material/Alert/AutoDelete.png) | ![illustration for AutoDelete](../../material/Alert/AutoDelete.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AutoDeleteXs>`
- `<$AutoDeleteSm>`
- `<$AutoDeleteMd>`
- `<$AutoDeleteLg>`





## AutoDelete

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element AutoDelete
include('material/Alert/AutoDelete')

' renders the element
AutoDelete('AutoDelete', 'Auto Delete', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element AutoDelete
include('material/Alert/AutoDelete')

' renders the element
AutoDelete('AutoDelete', 'Auto Delete', 'an optional tech label', 'an optional description')
@enduml
```

