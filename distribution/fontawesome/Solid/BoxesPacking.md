# BoxesPacking


```text
fontawesome/Solid/BoxesPacking
```

```text
include('fontawesome/Solid/BoxesPacking')
```



| Illustration | BoxesPacking |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/BoxesPacking.png) | ![illustration for BoxesPacking](../../fontawesome/Solid/BoxesPacking.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BoxesPackingXs>`
- `<$BoxesPackingSm>`
- `<$BoxesPackingMd>`
- `<$BoxesPackingLg>`





## BoxesPacking

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element BoxesPacking
include('fontawesome/Solid/BoxesPacking')

' renders the element
BoxesPacking('BoxesPacking', 'Boxes Packing', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element BoxesPacking
include('fontawesome/Solid/BoxesPacking')

' renders the element
BoxesPacking('BoxesPacking', 'Boxes Packing', 'an optional tech label', 'an optional description')
@enduml
```

