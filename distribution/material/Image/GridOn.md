# GridOn


```text
material/Image/GridOn
```

```text
include('material/Image/GridOn')
```



| Illustration | GridOn |
| :---: | :---: |
| ![illustration for Illustration](../../material/Image/GridOn.png) | ![illustration for GridOn](../../material/Image/GridOn.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GridOnXs>`
- `<$GridOnSm>`
- `<$GridOnMd>`
- `<$GridOnLg>`





## GridOn

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element GridOn
include('material/Image/GridOn')

' renders the element
GridOn('GridOn', 'Grid On', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element GridOn
include('material/Image/GridOn')

' renders the element
GridOn('GridOn', 'Grid On', 'an optional tech label', 'an optional description')
@enduml
```

