# RaspberryPi


```text
fontawesome-5/Brands/RaspberryPi
```

```text
include('fontawesome-5/Brands/RaspberryPi')
```



| Illustration | RaspberryPi |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/RaspberryPi.png) | ![illustration for RaspberryPi](../../fontawesome-5/Brands/RaspberryPi.Local.png) |




## RaspberryPi

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element RaspberryPi
include('fontawesome-5/Brands/RaspberryPi')

' renders the element
RaspberryPi('RaspberryPi', 'Raspberry Pi', 'an optional tech label')
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

' loads the Item which embeds the element RaspberryPi
include('fontawesome-5/Brands/RaspberryPi')

' renders the element
RaspberryPi('RaspberryPi', 'Raspberry Pi', 'an optional tech label')
@enduml
```

