# Atlas


```text
fontawesome/Solid/Atlas
```

```text
include('fontawesome/Solid/Atlas')
```



| Illustration | Atlas |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Atlas.png) | ![illustration for Atlas](../../fontawesome/Solid/Atlas.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AtlasXs>`
- `<$AtlasSm>`
- `<$AtlasMd>`
- `<$AtlasLg>`





## Atlas

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Atlas
include('fontawesome/Solid/Atlas')

' renders the element
Atlas('Atlas', 'Atlas', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Atlas
include('fontawesome/Solid/Atlas')

' renders the element
Atlas('Atlas', 'Atlas', 'an optional tech label', 'an optional description')
@enduml
```

