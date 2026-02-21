# HourglassEmpty


```text
material/Action/HourglassEmpty
```

```text
include('material/Action/HourglassEmpty')
```



| Illustration | HourglassEmpty |
| :---: | :---: |
| ![illustration for Illustration](../../material/Action/HourglassEmpty.png) | ![illustration for HourglassEmpty](../../material/Action/HourglassEmpty.Local.png) |



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
include('material/bootstrap')

' loads the Item which embeds the element HourglassEmpty
include('material/Action/HourglassEmpty')

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
include('material/bootstrap')

' loads the Item which embeds the element HourglassEmpty
include('material/Action/HourglassEmpty')

' renders the element
HourglassEmpty('HourglassEmpty', 'Hourglass Empty', 'an optional tech label', 'an optional description')
@enduml
```

