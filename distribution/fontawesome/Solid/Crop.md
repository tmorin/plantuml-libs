# Crop


```text
fontawesome/Solid/Crop
```

```text
include('fontawesome/Solid/Crop')
```



| Illustration | Crop |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Crop.png) | ![illustration for Crop](../../fontawesome/Solid/Crop.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CropXs>`
- `<$CropSm>`
- `<$CropMd>`
- `<$CropLg>`





## Crop

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Crop
include('fontawesome/Solid/Crop')

' renders the element
Crop('Crop', 'Crop', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Crop
include('fontawesome/Solid/Crop')

' renders the element
Crop('Crop', 'Crop', 'an optional tech label', 'an optional description')
@enduml
```

