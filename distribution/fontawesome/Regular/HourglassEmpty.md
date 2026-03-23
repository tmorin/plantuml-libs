# HourglassEmpty


```text
fontawesome/Regular/HourglassEmpty
```

```text
include('fontawesome/Regular/HourglassEmpty')
```



| Illustration | HourglassEmpty |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Regular/HourglassEmpty.png) | ![illustration for HourglassEmpty](../../fontawesome/Regular/HourglassEmpty.Local.png) |



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
include('fontawesome/Regular/HourglassEmpty')

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
include('fontawesome/Regular/HourglassEmpty')

' renders the element
HourglassEmpty('HourglassEmpty', 'Hourglass Empty', 'an optional tech label', 'an optional description')
@enduml
```

