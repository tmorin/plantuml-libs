# NoLuggage


```text
material-4/Social/NoLuggage
```

```text
include('material-4/Social/NoLuggage')
```



| Illustration | NoLuggage |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Social/NoLuggage.png) | ![illustration for NoLuggage](../../material-4/Social/NoLuggage.Local.png) |




## NoLuggage

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element NoLuggage
include('material-4/Social/NoLuggage')

' renders the element
NoLuggage('NoLuggage', 'No Luggage', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element NoLuggage
include('material-4/Social/NoLuggage')

' renders the element
NoLuggage('NoLuggage', 'No Luggage', 'an optional tech label', 'an optional description')
@enduml
```

