# CastForEducation


```text
material-4/Hardware/CastForEducation
```

```text
include('material-4/Hardware/CastForEducation')
```



| Illustration | CastForEducation |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Hardware/CastForEducation.png) | ![illustration for CastForEducation](../../material-4/Hardware/CastForEducation.Local.png) |




## CastForEducation

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element CastForEducation
include('material-4/Hardware/CastForEducation')

' renders the element
CastForEducation('CastForEducation', 'Cast For Education', 'an optional tech label', 'an optional description')
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
include('material-4/bootstrap')

' loads the Item which embeds the element CastForEducation
include('material-4/Hardware/CastForEducation')

' renders the element
CastForEducation('CastForEducation', 'Cast For Education', 'an optional tech label', 'an optional description')
@enduml
```

