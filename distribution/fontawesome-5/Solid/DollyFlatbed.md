# DollyFlatbed


```text
fontawesome-5/Solid/DollyFlatbed
```

```text
include('fontawesome-5/Solid/DollyFlatbed')
```



| Illustration | DollyFlatbed |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/DollyFlatbed.png) | ![illustration for DollyFlatbed](../../fontawesome-5/Solid/DollyFlatbed.Local.png) |




## DollyFlatbed

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element DollyFlatbed
include('fontawesome-5/Solid/DollyFlatbed')

' renders the element
DollyFlatbed('DollyFlatbed', 'Dolly Flatbed', 'an optional tech label')
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

' loads the Item which embeds the element DollyFlatbed
include('fontawesome-5/Solid/DollyFlatbed')

' renders the element
DollyFlatbed('DollyFlatbed', 'Dolly Flatbed', 'an optional tech label')
@enduml
```

