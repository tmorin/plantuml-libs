# HourglassEmpty


```text
fontawesome/Solid/HourglassEmpty
```

```text
include('fontawesome/Solid/HourglassEmpty')
```



| Illustration | HourglassEmpty |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/HourglassEmpty.png) | ![illustration for HourglassEmpty](../../fontawesome/Solid/HourglassEmpty.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$HourglassEmptyXs>`
- `<$HourglassEmptySm>`
- `<$HourglassEmptyMd>`
- `<$HourglassEmptyLg>`





## HourglassEmpty

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element HourglassEmpty
include('fontawesome/Solid/HourglassEmpty')

' renders the element
HourglassEmpty('HourglassEmpty', 'Hourglass Empty', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element HourglassEmpty
include('fontawesome/Solid/HourglassEmpty')

' renders the element
HourglassEmpty('HourglassEmpty', 'Hourglass Empty', 'an optional tech label', 'an optional description')
@enduml
```

