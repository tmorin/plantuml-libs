# LifeRing


```text
fontawesome-6/Regular/LifeRing
```

```text
include('fontawesome-6/Regular/LifeRing')
```



| Illustration | LifeRing |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Regular/LifeRing.png) | ![illustration for LifeRing](../../fontawesome-6/Regular/LifeRing.Local.png) |




## LifeRing

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element LifeRing
include('fontawesome-6/Regular/LifeRing')

' renders the element
LifeRing('LifeRing', 'Life Ring', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element LifeRing
include('fontawesome-6/Regular/LifeRing')

' renders the element
LifeRing('LifeRing', 'Life Ring', 'an optional tech label', 'an optional description')
@enduml
```
