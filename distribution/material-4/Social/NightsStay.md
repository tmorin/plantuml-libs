# NightsStay


```text
material-4/Social/NightsStay
```

```text
include('material-4/Social/NightsStay')
```



| Illustration | NightsStay |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Social/NightsStay.png) | ![illustration for NightsStay](../../material-4/Social/NightsStay.Local.png) |




## NightsStay

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element NightsStay
include('material-4/Social/NightsStay')

' renders the element
NightsStay('NightsStay', 'Nights Stay', 'an optional tech label')
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

' loads the Item which embeds the element NightsStay
include('material-4/Social/NightsStay')

' renders the element
NightsStay('NightsStay', 'Nights Stay', 'an optional tech label')
@enduml
```

