# Wheelchair


```text
fontawesome/Solid/Wheelchair
```

```text
include('fontawesome/Solid/Wheelchair')
```



| Illustration | Wheelchair |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Wheelchair.png) | ![illustration for Wheelchair](../../fontawesome/Solid/Wheelchair.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$WheelchairXs>`
- `<$WheelchairSm>`
- `<$WheelchairMd>`
- `<$WheelchairLg>`





## Wheelchair

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Wheelchair
include('fontawesome/Solid/Wheelchair')

' renders the element
Wheelchair('Wheelchair', 'Wheelchair', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Wheelchair
include('fontawesome/Solid/Wheelchair')

' renders the element
Wheelchair('Wheelchair', 'Wheelchair', 'an optional tech label', 'an optional description')
@enduml
```

