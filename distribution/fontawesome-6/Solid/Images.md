# Images


```text
fontawesome-6/Solid/Images
```

```text
include('fontawesome-6/Solid/Images')
```



| Illustration | Images |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/Images.png) | ![illustration for Images](../../fontawesome-6/Solid/Images.Local.png) |




## Images

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Images
include('fontawesome-6/Solid/Images')

' renders the element
Images('Images', 'Images', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Images
include('fontawesome-6/Solid/Images')

' renders the element
Images('Images', 'Images', 'an optional tech label', 'an optional description')
@enduml
```

