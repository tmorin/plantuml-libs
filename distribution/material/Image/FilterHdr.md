# FilterHdr


```text
material/Image/FilterHdr
```

```text
include('material/Image/FilterHdr')
```



| Illustration | FilterHdr |
| :---: | :---: |
| ![illustration for Illustration](../../material/Image/FilterHdr.png) | ![illustration for FilterHdr](../../material/Image/FilterHdr.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FilterHdrXs>`
- `<$FilterHdrSm>`
- `<$FilterHdrMd>`
- `<$FilterHdrLg>`





## FilterHdr

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element FilterHdr
include('material/Image/FilterHdr')

' renders the element
FilterHdr('FilterHdr', 'Filter Hdr', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element FilterHdr
include('material/Image/FilterHdr')

' renders the element
FilterHdr('FilterHdr', 'Filter Hdr', 'an optional tech label', 'an optional description')
@enduml
```

