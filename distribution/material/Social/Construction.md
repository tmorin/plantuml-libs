# Construction


```text
material/Social/Construction
```

```text
include('material/Social/Construction')
```



| Illustration | Construction |
| :---: | :---: |
| ![illustration for Illustration](../../material/Social/Construction.png) | ![illustration for Construction](../../material/Social/Construction.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ConstructionXs>`
- `<$ConstructionSm>`
- `<$ConstructionMd>`
- `<$ConstructionLg>`





## Construction

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element Construction
include('material/Social/Construction')

' renders the element
Construction('Construction', 'Construction', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Construction
include('material/Social/Construction')

' renders the element
Construction('Construction', 'Construction', 'an optional tech label', 'an optional description')
@enduml
```

