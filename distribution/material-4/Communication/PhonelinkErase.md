# PhonelinkErase


```text
material-4/Communication/PhonelinkErase
```

```text
include('material-4/Communication/PhonelinkErase')
```



| Illustration | PhonelinkErase |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Communication/PhonelinkErase.png) | ![illustration for PhonelinkErase](../../material-4/Communication/PhonelinkErase.Local.png) |




## PhonelinkErase

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element PhonelinkErase
include('material-4/Communication/PhonelinkErase')

' renders the element
PhonelinkErase('PhonelinkErase', 'Phonelink Erase', 'an optional tech label')
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

' loads the Item which embeds the element PhonelinkErase
include('material-4/Communication/PhonelinkErase')

' renders the element
PhonelinkErase('PhonelinkErase', 'Phonelink Erase', 'an optional tech label')
@enduml
```

