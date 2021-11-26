# PiedPiper


```text
fontawesome-5/Brands/PiedPiper
```

```text
include('fontawesome-5/Brands/PiedPiper')
```



| Illustration | PiedPiper |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/PiedPiper.png) | ![illustration for PiedPiper](../../fontawesome-5/Brands/PiedPiper.Local.png) |




## PiedPiper

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element PiedPiper
include('fontawesome-5/Brands/PiedPiper')

' renders the element
PiedPiper('PiedPiper', 'Pied Piper', 'an optional tech label')
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

' loads the Item which embeds the element PiedPiper
include('fontawesome-5/Brands/PiedPiper')

' renders the element
PiedPiper('PiedPiper', 'Pied Piper', 'an optional tech label')
@enduml
```

