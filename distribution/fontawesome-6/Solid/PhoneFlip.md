# PhoneFlip


```text
fontawesome-6/Solid/PhoneFlip
```

```text
include('fontawesome-6/Solid/PhoneFlip')
```



| Illustration | PhoneFlip |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/PhoneFlip.png) | ![illustration for PhoneFlip](../../fontawesome-6/Solid/PhoneFlip.Local.png) |




## PhoneFlip

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element PhoneFlip
include('fontawesome-6/Solid/PhoneFlip')

' renders the element
PhoneFlip('PhoneFlip', 'Phone Flip', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element PhoneFlip
include('fontawesome-6/Solid/PhoneFlip')

' renders the element
PhoneFlip('PhoneFlip', 'Phone Flip', 'an optional tech label', 'an optional description')
@enduml
```

