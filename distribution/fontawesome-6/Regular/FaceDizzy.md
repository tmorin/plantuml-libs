# FaceDizzy


```text
fontawesome-6/Regular/FaceDizzy
```

```text
include('fontawesome-6/Regular/FaceDizzy')
```



| Illustration | FaceDizzy |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Regular/FaceDizzy.png) | ![illustration for FaceDizzy](../../fontawesome-6/Regular/FaceDizzy.Local.png) |




## FaceDizzy

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element FaceDizzy
include('fontawesome-6/Regular/FaceDizzy')

' renders the element
FaceDizzy('FaceDizzy', 'Face Dizzy', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element FaceDizzy
include('fontawesome-6/Regular/FaceDizzy')

' renders the element
FaceDizzy('FaceDizzy', 'Face Dizzy', 'an optional tech label', 'an optional description')
@enduml
```

