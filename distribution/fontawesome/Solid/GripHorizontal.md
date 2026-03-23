# GripHorizontal


```text
fontawesome/Solid/GripHorizontal
```

```text
include('fontawesome/Solid/GripHorizontal')
```



| Illustration | GripHorizontal |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/GripHorizontal.png) | ![illustration for GripHorizontal](../../fontawesome/Solid/GripHorizontal.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GripHorizontalXs>`
- `<$GripHorizontalSm>`
- `<$GripHorizontalMd>`
- `<$GripHorizontalLg>`





## GripHorizontal

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element GripHorizontal
include('fontawesome/Solid/GripHorizontal')

' renders the element
GripHorizontal('GripHorizontal', 'Grip Horizontal', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element GripHorizontal
include('fontawesome/Solid/GripHorizontal')

' renders the element
GripHorizontal('GripHorizontal', 'Grip Horizontal', 'an optional tech label', 'an optional description')
@enduml
```

