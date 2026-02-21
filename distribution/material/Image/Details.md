# Details


```text
material/Image/Details
```

```text
include('material/Image/Details')
```



| Illustration | Details |
| :---: | :---: |
| ![illustration for Illustration](../../material/Image/Details.png) | ![illustration for Details](../../material/Image/Details.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DetailsXs>`
- `<$DetailsSm>`
- `<$DetailsMd>`
- `<$DetailsLg>`





## Details

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element Details
include('material/Image/Details')

' renders the element
Details('Details', 'Details', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Details
include('material/Image/Details')

' renders the element
Details('Details', 'Details', 'an optional tech label', 'an optional description')
@enduml
```

