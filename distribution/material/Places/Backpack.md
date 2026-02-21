# Backpack


```text
material/Places/Backpack
```

```text
include('material/Places/Backpack')
```



| Illustration | Backpack |
| :---: | :---: |
| ![illustration for Illustration](../../material/Places/Backpack.png) | ![illustration for Backpack](../../material/Places/Backpack.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BackpackXs>`
- `<$BackpackSm>`
- `<$BackpackMd>`
- `<$BackpackLg>`





## Backpack

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element Backpack
include('material/Places/Backpack')

' renders the element
Backpack('Backpack', 'Backpack', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Backpack
include('material/Places/Backpack')

' renders the element
Backpack('Backpack', 'Backpack', 'an optional tech label', 'an optional description')
@enduml
```

