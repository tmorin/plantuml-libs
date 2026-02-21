# SouthEast


```text
material/Navigation/SouthEast
```

```text
include('material/Navigation/SouthEast')
```



| Illustration | SouthEast |
| :---: | :---: |
| ![illustration for Illustration](../../material/Navigation/SouthEast.png) | ![illustration for SouthEast](../../material/Navigation/SouthEast.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SouthEastXs>`
- `<$SouthEastSm>`
- `<$SouthEastMd>`
- `<$SouthEastLg>`





## SouthEast

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element SouthEast
include('material/Navigation/SouthEast')

' renders the element
SouthEast('SouthEast', 'South East', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element SouthEast
include('material/Navigation/SouthEast')

' renders the element
SouthEast('SouthEast', 'South East', 'an optional tech label', 'an optional description')
@enduml
```

