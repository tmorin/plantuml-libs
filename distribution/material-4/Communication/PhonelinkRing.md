# PhonelinkRing


```text
material-4/Communication/PhonelinkRing
```

```text
include('material-4/Communication/PhonelinkRing')
```



| Illustration | PhonelinkRing |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Communication/PhonelinkRing.png) | ![illustration for PhonelinkRing](../../material-4/Communication/PhonelinkRing.Local.png) |




## PhonelinkRing

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element PhonelinkRing
include('material-4/Communication/PhonelinkRing')

' renders the element
PhonelinkRing('PhonelinkRing', 'Phonelink Ring', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element PhonelinkRing
include('material-4/Communication/PhonelinkRing')

' renders the element
PhonelinkRing('PhonelinkRing', 'Phonelink Ring', 'an optional tech label', 'an optional description')
@enduml
```

