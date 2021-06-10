# GrinBeam


```text
fontawesome-5/Regular/GrinBeam
```

```text
include('fontawesome-5/Regular/GrinBeam')
```



| Illustration | GrinBeam |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Regular/GrinBeam.png) | ![illustration for GrinBeam](../../fontawesome-5/Regular/GrinBeam.Local.png) |




## GrinBeam

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element GrinBeam
include('fontawesome-5/Regular/GrinBeam')

' renders the element
GrinBeam('GrinBeam', 'Grin Beam', 'an optional tech label')
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

' loads the Item which embeds the element GrinBeam
include('fontawesome-5/Regular/GrinBeam')

' renders the element
GrinBeam('GrinBeam', 'Grin Beam', 'an optional tech label')
@enduml
```

