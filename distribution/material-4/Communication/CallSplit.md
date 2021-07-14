# CallSplit


```text
material-4/Communication/CallSplit
```

```text
include('material-4/Communication/CallSplit')
```



| Illustration | CallSplit |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Communication/CallSplit.png) | ![illustration for CallSplit](../../material-4/Communication/CallSplit.Local.png) |




## CallSplit

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element CallSplit
include('material-4/Communication/CallSplit')

' renders the element
CallSplit('CallSplit', 'Call Split', 'an optional tech label')
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

' loads the Item which embeds the element CallSplit
include('material-4/Communication/CallSplit')

' renders the element
CallSplit('CallSplit', 'Call Split', 'an optional tech label')
@enduml
```

