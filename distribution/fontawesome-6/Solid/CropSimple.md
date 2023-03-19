# CropSimple


```text
fontawesome-6/Solid/CropSimple
```

```text
include('fontawesome-6/Solid/CropSimple')
```



| Illustration | CropSimple |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/CropSimple.png) | ![illustration for CropSimple](../../fontawesome-6/Solid/CropSimple.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CropSimpleXs>`
- `<$CropSimpleSm>`
- `<$CropSimpleMd>`
- `<$CropSimpleLg>`





## CropSimple

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element CropSimple
include('fontawesome-6/Solid/CropSimple')

' renders the element
CropSimple('CropSimple', 'Crop Simple', 'an optional tech label', 'an optional description')
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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element CropSimple
include('fontawesome-6/Solid/CropSimple')

' renders the element
CropSimple('CropSimple', 'Crop Simple', 'an optional tech label', 'an optional description')
@enduml
```

