# PhoneSquareAlt


```text
fontawesome-5/Solid/PhoneSquareAlt
```

```text
include('fontawesome-5/Solid/PhoneSquareAlt')
```



| Illustration | PhoneSquareAlt |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/PhoneSquareAlt.png) | ![illustration for PhoneSquareAlt](../../fontawesome-5/Solid/PhoneSquareAlt.Local.png) |




## PhoneSquareAlt

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element PhoneSquareAlt
include('fontawesome-5/Solid/PhoneSquareAlt')

' renders the element
PhoneSquareAlt('PhoneSquareAlt', 'Phone Square Alt', 'an optional tech label')
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

' loads the Item which embeds the element PhoneSquareAlt
include('fontawesome-5/Solid/PhoneSquareAlt')

' renders the element
PhoneSquareAlt('PhoneSquareAlt', 'Phone Square Alt', 'an optional tech label')
@enduml
```

