# LaughBeam


```text
fontawesome-5/Regular/LaughBeam
```

```text
include('fontawesome-5/Regular/LaughBeam')
```



| Illustration | LaughBeam |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Regular/LaughBeam.png) | ![illustration for LaughBeam](../../fontawesome-5/Regular/LaughBeam.Local.png) |




## LaughBeam

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element LaughBeam
include('fontawesome-5/Regular/LaughBeam')

' renders the element
LaughBeam('LaughBeam', 'Laugh Beam', 'an optional tech label')
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

' loads the Item which embeds the element LaughBeam
include('fontawesome-5/Regular/LaughBeam')

' renders the element
LaughBeam('LaughBeam', 'Laugh Beam', 'an optional tech label')
@enduml
```

