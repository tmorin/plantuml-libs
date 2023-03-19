# Crop169


```text
material-4/Image/Crop169
```

```text
include('material-4/Image/Crop169')
```



| Illustration | Crop169 |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Image/Crop169.png) | ![illustration for Crop169](../../material-4/Image/Crop169.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$Crop169Xs>`
- `<$Crop169Sm>`
- `<$Crop169Md>`
- `<$Crop169Lg>`





## Crop169

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Crop169
include('material-4/Image/Crop169')

' renders the element
Crop169('Crop169', 'Crop169', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Crop169
include('material-4/Image/Crop169')

' renders the element
Crop169('Crop169', 'Crop169', 'an optional tech label', 'an optional description')
@enduml
```

