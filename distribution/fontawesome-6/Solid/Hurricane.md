# Hurricane


```text
fontawesome-6/Solid/Hurricane
```

```text
include('fontawesome-6/Solid/Hurricane')
```



| Illustration | Hurricane |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/Hurricane.png) | ![illustration for Hurricane](../../fontawesome-6/Solid/Hurricane.Local.png) |




## Hurricane

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Hurricane
include('fontawesome-6/Solid/Hurricane')

' renders the element
Hurricane('Hurricane', 'Hurricane', 'an optional tech label')
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

' loads the Item which embeds the element Hurricane
include('fontawesome-6/Solid/Hurricane')

' renders the element
Hurricane('Hurricane', 'Hurricane', 'an optional tech label')
@enduml
```

