# NoBackpack


```text
material/Places/NoBackpack
```

```text
include('material/Places/NoBackpack')
```



| Illustration | NoBackpack |
| :---: | :---: |
| ![illustration for Illustration](../../material/Places/NoBackpack.png) | ![illustration for NoBackpack](../../material/Places/NoBackpack.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$NoBackpackXs>`
- `<$NoBackpackSm>`
- `<$NoBackpackMd>`
- `<$NoBackpackLg>`





## NoBackpack

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element NoBackpack
include('material/Places/NoBackpack')

' renders the element
NoBackpack('NoBackpack', 'No Backpack', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element NoBackpack
include('material/Places/NoBackpack')

' renders the element
NoBackpack('NoBackpack', 'No Backpack', 'an optional tech label', 'an optional description')
@enduml
```

