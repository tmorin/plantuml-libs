# Labview


```text
simpleicons-14/L/Labview
```

```text
include('simpleicons-14/L/Labview')
```



| Illustration | Labview |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/L/Labview.png) | ![illustration for Labview](../../simpleicons-14/L/Labview.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$LabviewXs>`
- `<$LabviewSm>`
- `<$LabviewMd>`
- `<$LabviewLg>`





## Labview

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Labview
include('simpleicons-14/L/Labview')

' renders the element
Labview('Labview', 'Labview', 'an optional tech label', 'an optional description')
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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Labview
include('simpleicons-14/L/Labview')

' renders the element
Labview('Labview', 'Labview', 'an optional tech label', 'an optional description')
@enduml
```

