# HandPointer


```text
fontawesome-6/Solid/HandPointer
```

```text
include('fontawesome-6/Solid/HandPointer')
```



| Illustration | HandPointer |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/HandPointer.png) | ![illustration for HandPointer](../../fontawesome-6/Solid/HandPointer.Local.png) |




## HandPointer

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element HandPointer
include('fontawesome-6/Solid/HandPointer')

' renders the element
HandPointer('HandPointer', 'Hand Pointer', 'an optional tech label')
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

' loads the Item which embeds the element HandPointer
include('fontawesome-6/Solid/HandPointer')

' renders the element
HandPointer('HandPointer', 'Hand Pointer', 'an optional tech label')
@enduml
```

