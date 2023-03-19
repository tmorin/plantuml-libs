# Crop75


```text
material-4/Image/Crop75
```

```text
include('material-4/Image/Crop75')
```



| Illustration | Crop75 |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Image/Crop75.png) | ![illustration for Crop75](../../material-4/Image/Crop75.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$Crop75Xs>`
- `<$Crop75Sm>`
- `<$Crop75Md>`
- `<$Crop75Lg>`





## Crop75

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Crop75
include('material-4/Image/Crop75')

' renders the element
Crop75('Crop75', 'Crop75', 'an optional tech label', 'an optional description')
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
include('material-4/bootstrap')

' loads the Item which embeds the element Crop75
include('material-4/Image/Crop75')

' renders the element
Crop75('Crop75', 'Crop75', 'an optional tech label', 'an optional description')
@enduml
```

