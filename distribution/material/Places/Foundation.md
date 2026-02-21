# Foundation


```text
material/Places/Foundation
```

```text
include('material/Places/Foundation')
```



| Illustration | Foundation |
| :---: | :---: |
| ![illustration for Illustration](../../material/Places/Foundation.png) | ![illustration for Foundation](../../material/Places/Foundation.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FoundationXs>`
- `<$FoundationSm>`
- `<$FoundationMd>`
- `<$FoundationLg>`





## Foundation

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element Foundation
include('material/Places/Foundation')

' renders the element
Foundation('Foundation', 'Foundation', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Foundation
include('material/Places/Foundation')

' renders the element
Foundation('Foundation', 'Foundation', 'an optional tech label', 'an optional description')
@enduml
```

