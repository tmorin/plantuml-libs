# BreadSlice


```text
fontawesome-6/Solid/BreadSlice
```

```text
include('fontawesome-6/Solid/BreadSlice')
```



| Illustration | BreadSlice |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/BreadSlice.png) | ![illustration for BreadSlice](../../fontawesome-6/Solid/BreadSlice.Local.png) |




## BreadSlice

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element BreadSlice
include('fontawesome-6/Solid/BreadSlice')

' renders the element
BreadSlice('BreadSlice', 'Bread Slice', 'an optional tech label')
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

' loads the Item which embeds the element BreadSlice
include('fontawesome-6/Solid/BreadSlice')

' renders the element
BreadSlice('BreadSlice', 'Bread Slice', 'an optional tech label')
@enduml
```

