# HandsClapping


```text
fontawesome-6/Solid/HandsClapping
```

```text
include('fontawesome-6/Solid/HandsClapping')
```



| Illustration | HandsClapping |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/HandsClapping.png) | ![illustration for HandsClapping](../../fontawesome-6/Solid/HandsClapping.Local.png) |




## HandsClapping

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element HandsClapping
include('fontawesome-6/Solid/HandsClapping')

' renders the element
HandsClapping('HandsClapping', 'Hands Clapping', 'an optional tech label')
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

' loads the Item which embeds the element HandsClapping
include('fontawesome-6/Solid/HandsClapping')

' renders the element
HandsClapping('HandsClapping', 'Hands Clapping', 'an optional tech label')
@enduml
```

