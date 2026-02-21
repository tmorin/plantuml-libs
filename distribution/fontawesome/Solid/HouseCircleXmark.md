# HouseCircleXmark


```text
fontawesome/Solid/HouseCircleXmark
```

```text
include('fontawesome/Solid/HouseCircleXmark')
```



| Illustration | HouseCircleXmark |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/HouseCircleXmark.png) | ![illustration for HouseCircleXmark](../../fontawesome/Solid/HouseCircleXmark.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$HouseCircleXmarkXs>`
- `<$HouseCircleXmarkSm>`
- `<$HouseCircleXmarkMd>`
- `<$HouseCircleXmarkLg>`





## HouseCircleXmark

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element HouseCircleXmark
include('fontawesome/Solid/HouseCircleXmark')

' renders the element
HouseCircleXmark('HouseCircleXmark', 'House Circle Xmark', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element HouseCircleXmark
include('fontawesome/Solid/HouseCircleXmark')

' renders the element
HouseCircleXmark('HouseCircleXmark', 'House Circle Xmark', 'an optional tech label', 'an optional description')
@enduml
```

