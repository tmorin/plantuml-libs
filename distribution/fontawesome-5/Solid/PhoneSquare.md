# PhoneSquare


```text
fontawesome-5/Solid/PhoneSquare
```

```text
include('fontawesome-5/Solid/PhoneSquare')
```



| Illustration | PhoneSquare |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/PhoneSquare.png) | ![illustration for PhoneSquare](../../fontawesome-5/Solid/PhoneSquare.Local.png) |




## PhoneSquare

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element PhoneSquare
include('fontawesome-5/Solid/PhoneSquare')

' renders the element
PhoneSquare('PhoneSquare', 'Phone Square', 'an optional tech label')
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

' loads the Item which embeds the element PhoneSquare
include('fontawesome-5/Solid/PhoneSquare')

' renders the element
PhoneSquare('PhoneSquare', 'Phone Square', 'an optional tech label')
@enduml
```

