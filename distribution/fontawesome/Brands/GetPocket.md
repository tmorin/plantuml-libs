# GetPocket


```text
fontawesome/Brands/GetPocket
```

```text
include('fontawesome/Brands/GetPocket')
```



| Illustration | GetPocket |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/GetPocket.png) | ![illustration for GetPocket](../../fontawesome/Brands/GetPocket.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GetPocketXs>`
- `<$GetPocketSm>`
- `<$GetPocketMd>`
- `<$GetPocketLg>`





## GetPocket

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element GetPocket
include('fontawesome/Brands/GetPocket')

' renders the element
GetPocket('GetPocket', 'Get Pocket', 'an optional tech label', 'an optional description')
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
include('fontawesome/bootstrap')

' loads the Item which embeds the element GetPocket
include('fontawesome/Brands/GetPocket')

' renders the element
GetPocket('GetPocket', 'Get Pocket', 'an optional tech label', 'an optional description')
@enduml
```

