# PhonelinkLock


```text
material-4/Communication/PhonelinkLock
```

```text
include('material-4/Communication/PhonelinkLock')
```



| Illustration | PhonelinkLock |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Communication/PhonelinkLock.png) | ![illustration for PhonelinkLock](../../material-4/Communication/PhonelinkLock.Local.png) |




## PhonelinkLock

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element PhonelinkLock
include('material-4/Communication/PhonelinkLock')

' renders the element
PhonelinkLock('PhonelinkLock', 'Phonelink Lock', 'an optional tech label')
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

' loads the Item which embeds the element PhonelinkLock
include('material-4/Communication/PhonelinkLock')

' renders the element
PhonelinkLock('PhonelinkLock', 'Phonelink Lock', 'an optional tech label')
@enduml
```

