# ThinkPeaks


```text
fontawesome-5/Brands/ThinkPeaks
```

```text
include('fontawesome-5/Brands/ThinkPeaks')
```



| Illustration | ThinkPeaks |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/ThinkPeaks.png) | ![illustration for ThinkPeaks](../../fontawesome-5/Brands/ThinkPeaks.Local.png) |




## ThinkPeaks

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element ThinkPeaks
include('fontawesome-5/Brands/ThinkPeaks')

' renders the element
ThinkPeaks('ThinkPeaks', 'Think Peaks', 'an optional tech label')
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
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element ThinkPeaks
include('fontawesome-5/Brands/ThinkPeaks')

' renders the element
ThinkPeaks('ThinkPeaks', 'Think Peaks', 'an optional tech label')
@enduml
```

