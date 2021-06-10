# HandPointer


```text
fontawesome-5/Solid/HandPointer
```

```text
include('fontawesome-5/Solid/HandPointer')
```



| Illustration | HandPointer |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/HandPointer.png) | ![illustration for HandPointer](../../fontawesome-5/Solid/HandPointer.Local.png) |




## HandPointer

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element HandPointer
include('fontawesome-5/Solid/HandPointer')

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
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element HandPointer
include('fontawesome-5/Solid/HandPointer')

' renders the element
HandPointer('HandPointer', 'Hand Pointer', 'an optional tech label')
@enduml
```

