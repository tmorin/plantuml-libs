# FaceLaughSquint


```text
fontawesome-6/Solid/FaceLaughSquint
```

```text
include('fontawesome-6/Solid/FaceLaughSquint')
```



| Illustration | FaceLaughSquint |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/FaceLaughSquint.png) | ![illustration for FaceLaughSquint](../../fontawesome-6/Solid/FaceLaughSquint.Local.png) |




## FaceLaughSquint

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element FaceLaughSquint
include('fontawesome-6/Solid/FaceLaughSquint')

' renders the element
FaceLaughSquint('FaceLaughSquint', 'Face Laugh Squint', 'an optional tech label')
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

' loads the Item which embeds the element FaceLaughSquint
include('fontawesome-6/Solid/FaceLaughSquint')

' renders the element
FaceLaughSquint('FaceLaughSquint', 'Face Laugh Squint', 'an optional tech label')
@enduml
```

