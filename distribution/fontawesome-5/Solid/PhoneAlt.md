# PhoneAlt


```text
fontawesome-5/Solid/PhoneAlt
```

```text
include('fontawesome-5/Solid/PhoneAlt')
```



| Illustration | PhoneAlt |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/PhoneAlt.png) | ![illustration for PhoneAlt](../../fontawesome-5/Solid/PhoneAlt.Local.png) |




## PhoneAlt

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element PhoneAlt
include('fontawesome-5/Solid/PhoneAlt')

' renders the element
PhoneAlt('PhoneAlt', 'Phone Alt', 'an optional tech label')
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

' loads the Item which embeds the element PhoneAlt
include('fontawesome-5/Solid/PhoneAlt')

' renders the element
PhoneAlt('PhoneAlt', 'Phone Alt', 'an optional tech label')
@enduml
```

