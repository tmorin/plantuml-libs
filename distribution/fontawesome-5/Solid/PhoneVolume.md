# PhoneVolume


```text
fontawesome-5/Solid/PhoneVolume
```

```text
include('fontawesome-5/Solid/PhoneVolume')
```



| Illustration | PhoneVolume |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/PhoneVolume.png) | ![illustration for PhoneVolume](../../fontawesome-5/Solid/PhoneVolume.Local.png) |




## PhoneVolume

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element PhoneVolume
include('fontawesome-5/Solid/PhoneVolume')

' renders the element
PhoneVolume('PhoneVolume', 'Phone Volume', 'an optional tech label')
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

' loads the Item which embeds the element PhoneVolume
include('fontawesome-5/Solid/PhoneVolume')

' renders the element
PhoneVolume('PhoneVolume', 'Phone Volume', 'an optional tech label')
@enduml
```

