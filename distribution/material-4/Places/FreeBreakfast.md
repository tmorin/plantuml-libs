# FreeBreakfast


```text
material-4/Places/FreeBreakfast
```

```text
include('material-4/Places/FreeBreakfast')
```



| Illustration | FreeBreakfast |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Places/FreeBreakfast.png) | ![illustration for FreeBreakfast](../../material-4/Places/FreeBreakfast.Local.png) |




## FreeBreakfast

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element FreeBreakfast
include('material-4/Places/FreeBreakfast')

' renders the element
FreeBreakfast('FreeBreakfast', 'Free Breakfast', 'an optional tech label')
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

' loads the Item which embeds the element FreeBreakfast
include('material-4/Places/FreeBreakfast')

' renders the element
FreeBreakfast('FreeBreakfast', 'Free Breakfast', 'an optional tech label')
@enduml
```

