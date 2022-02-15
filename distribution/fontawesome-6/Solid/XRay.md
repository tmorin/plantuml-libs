# XRay


```text
fontawesome-6/Solid/XRay
```

```text
include('fontawesome-6/Solid/XRay')
```



| Illustration | XRay |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/XRay.png) | ![illustration for XRay](../../fontawesome-6/Solid/XRay.Local.png) |




## XRay

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element XRay
include('fontawesome-6/Solid/XRay')

' renders the element
XRay('XRay', 'X Ray', 'an optional tech label')
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

' loads the Item which embeds the element XRay
include('fontawesome-6/Solid/XRay')

' renders the element
XRay('XRay', 'X Ray', 'an optional tech label')
@enduml
```

