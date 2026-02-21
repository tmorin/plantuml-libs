# ThinkPeaks


```text
fontawesome/Brands/ThinkPeaks
```

```text
include('fontawesome/Brands/ThinkPeaks')
```



| Illustration | ThinkPeaks |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/ThinkPeaks.png) | ![illustration for ThinkPeaks](../../fontawesome/Brands/ThinkPeaks.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ThinkPeaksXs>`
- `<$ThinkPeaksSm>`
- `<$ThinkPeaksMd>`
- `<$ThinkPeaksLg>`





## ThinkPeaks

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element ThinkPeaks
include('fontawesome/Brands/ThinkPeaks')

' renders the element
ThinkPeaks('ThinkPeaks', 'Think Peaks', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ThinkPeaks
include('fontawesome/Brands/ThinkPeaks')

' renders the element
ThinkPeaks('ThinkPeaks', 'Think Peaks', 'an optional tech label', 'an optional description')
@enduml
```

