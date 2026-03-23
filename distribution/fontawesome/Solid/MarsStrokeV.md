# MarsStrokeV


```text
fontawesome/Solid/MarsStrokeV
```

```text
include('fontawesome/Solid/MarsStrokeV')
```



| Illustration | MarsStrokeV |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/MarsStrokeV.png) | ![illustration for MarsStrokeV](../../fontawesome/Solid/MarsStrokeV.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MarsStrokeVXs>`
- `<$MarsStrokeVSm>`
- `<$MarsStrokeVMd>`
- `<$MarsStrokeVLg>`





## MarsStrokeV

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element MarsStrokeV
include('fontawesome/Solid/MarsStrokeV')

' renders the element
MarsStrokeV('MarsStrokeV', 'Mars Stroke V', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element MarsStrokeV
include('fontawesome/Solid/MarsStrokeV')

' renders the element
MarsStrokeV('MarsStrokeV', 'Mars Stroke V', 'an optional tech label', 'an optional description')
@enduml
```

