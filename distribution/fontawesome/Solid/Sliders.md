# Sliders


```text
fontawesome/Solid/Sliders
```

```text
include('fontawesome/Solid/Sliders')
```



| Illustration | Sliders |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Sliders.png) | ![illustration for Sliders](../../fontawesome/Solid/Sliders.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SlidersXs>`
- `<$SlidersSm>`
- `<$SlidersMd>`
- `<$SlidersLg>`





## Sliders

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Sliders
include('fontawesome/Solid/Sliders')

' renders the element
Sliders('Sliders', 'Sliders', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Sliders
include('fontawesome/Solid/Sliders')

' renders the element
Sliders('Sliders', 'Sliders', 'an optional tech label', 'an optional description')
@enduml
```

