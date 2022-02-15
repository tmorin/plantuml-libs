# SterlingSign


```text
fontawesome-6/Solid/SterlingSign
```

```text
include('fontawesome-6/Solid/SterlingSign')
```



| Illustration | SterlingSign |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/SterlingSign.png) | ![illustration for SterlingSign](../../fontawesome-6/Solid/SterlingSign.Local.png) |




## SterlingSign

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element SterlingSign
include('fontawesome-6/Solid/SterlingSign')

' renders the element
SterlingSign('SterlingSign', 'Sterling Sign', 'an optional tech label')
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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element SterlingSign
include('fontawesome-6/Solid/SterlingSign')

' renders the element
SterlingSign('SterlingSign', 'Sterling Sign', 'an optional tech label')
@enduml
```

