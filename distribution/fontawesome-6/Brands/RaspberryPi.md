# RaspberryPi


```text
fontawesome-6/Brands/RaspberryPi
```

```text
include('fontawesome-6/Brands/RaspberryPi')
```



| Illustration | RaspberryPi |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/RaspberryPi.png) | ![illustration for RaspberryPi](../../fontawesome-6/Brands/RaspberryPi.Local.png) |




## RaspberryPi

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element RaspberryPi
include('fontawesome-6/Brands/RaspberryPi')

' renders the element
RaspberryPi('RaspberryPi', 'Raspberry Pi', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element RaspberryPi
include('fontawesome-6/Brands/RaspberryPi')

' renders the element
RaspberryPi('RaspberryPi', 'Raspberry Pi', 'an optional tech label', 'an optional description')
@enduml
```

