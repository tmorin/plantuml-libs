# CarAlt


```text
fontawesome-5/Solid/CarAlt
```

```text
include('fontawesome-5/Solid/CarAlt')
```



| Illustration | CarAlt |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/CarAlt.png) | ![illustration for CarAlt](../../fontawesome-5/Solid/CarAlt.Local.png) |




## CarAlt

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element CarAlt
include('fontawesome-5/Solid/CarAlt')

' renders the element
CarAlt('CarAlt', 'Car Alt', 'an optional tech label')
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

' loads the Item which embeds the element CarAlt
include('fontawesome-5/Solid/CarAlt')

' renders the element
CarAlt('CarAlt', 'Car Alt', 'an optional tech label')
@enduml
```

