# ArrowPointer


```text
fontawesome-6/Solid/ArrowPointer
```

```text
include('fontawesome-6/Solid/ArrowPointer')
```



| Illustration | ArrowPointer |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/ArrowPointer.png) | ![illustration for ArrowPointer](../../fontawesome-6/Solid/ArrowPointer.Local.png) |




## ArrowPointer

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element ArrowPointer
include('fontawesome-6/Solid/ArrowPointer')

' renders the element
ArrowPointer('ArrowPointer', 'Arrow Pointer', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ArrowPointer
include('fontawesome-6/Solid/ArrowPointer')

' renders the element
ArrowPointer('ArrowPointer', 'Arrow Pointer', 'an optional tech label', 'an optional description')
@enduml
```

