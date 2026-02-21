# HourglassTop


```text
material/Communication/HourglassTop
```

```text
include('material/Communication/HourglassTop')
```



| Illustration | HourglassTop |
| :---: | :---: |
| ![illustration for Illustration](../../material/Communication/HourglassTop.png) | ![illustration for HourglassTop](../../material/Communication/HourglassTop.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$HourglassTopXs>`
- `<$HourglassTopSm>`
- `<$HourglassTopMd>`
- `<$HourglassTopLg>`





## HourglassTop

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element HourglassTop
include('material/Communication/HourglassTop')

' renders the element
HourglassTop('HourglassTop', 'Hourglass Top', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element HourglassTop
include('material/Communication/HourglassTop')

' renders the element
HourglassTop('HourglassTop', 'Hourglass Top', 'an optional tech label', 'an optional description')
@enduml
```

