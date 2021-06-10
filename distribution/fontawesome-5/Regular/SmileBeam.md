# SmileBeam


```text
fontawesome-5/Regular/SmileBeam
```

```text
include('fontawesome-5/Regular/SmileBeam')
```



| Illustration | SmileBeam |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Regular/SmileBeam.png) | ![illustration for SmileBeam](../../fontawesome-5/Regular/SmileBeam.Local.png) |




## SmileBeam

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element SmileBeam
include('fontawesome-5/Regular/SmileBeam')

' renders the element
SmileBeam('SmileBeam', 'Smile Beam', 'an optional tech label')
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

' loads the Item which embeds the element SmileBeam
include('fontawesome-5/Regular/SmileBeam')

' renders the element
SmileBeam('SmileBeam', 'Smile Beam', 'an optional tech label')
@enduml
```

