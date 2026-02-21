# FaceMeh


```text
fontawesome/Solid/FaceMeh
```

```text
include('fontawesome/Solid/FaceMeh')
```



| Illustration | FaceMeh |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/FaceMeh.png) | ![illustration for FaceMeh](../../fontawesome/Solid/FaceMeh.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FaceMehXs>`
- `<$FaceMehSm>`
- `<$FaceMehMd>`
- `<$FaceMehLg>`





## FaceMeh

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element FaceMeh
include('fontawesome/Solid/FaceMeh')

' renders the element
FaceMeh('FaceMeh', 'Face Meh', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element FaceMeh
include('fontawesome/Solid/FaceMeh')

' renders the element
FaceMeh('FaceMeh', 'Face Meh', 'an optional tech label', 'an optional description')
@enduml
```

