# StoreAlt


```text
fontawesome-5/Solid/StoreAlt
```

```text
include('fontawesome-5/Solid/StoreAlt')
```



| Illustration | StoreAlt |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/StoreAlt.png) | ![illustration for StoreAlt](../../fontawesome-5/Solid/StoreAlt.Local.png) |




## StoreAlt

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element StoreAlt
include('fontawesome-5/Solid/StoreAlt')

' renders the element
StoreAlt('StoreAlt', 'Store Alt', 'an optional tech label')
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

' loads the Item which embeds the element StoreAlt
include('fontawesome-5/Solid/StoreAlt')

' renders the element
StoreAlt('StoreAlt', 'Store Alt', 'an optional tech label')
@enduml
```

