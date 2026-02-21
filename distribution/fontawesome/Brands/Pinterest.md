# Pinterest


```text
fontawesome/Brands/Pinterest
```

```text
include('fontawesome/Brands/Pinterest')
```



| Illustration | Pinterest |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/Pinterest.png) | ![illustration for Pinterest](../../fontawesome/Brands/Pinterest.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PinterestXs>`
- `<$PinterestSm>`
- `<$PinterestMd>`
- `<$PinterestLg>`





## Pinterest

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Pinterest
include('fontawesome/Brands/Pinterest')

' renders the element
Pinterest('Pinterest', 'Pinterest', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Pinterest
include('fontawesome/Brands/Pinterest')

' renders the element
Pinterest('Pinterest', 'Pinterest', 'an optional tech label', 'an optional description')
@enduml
```

