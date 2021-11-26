# Female


```text
fontawesome-5/Solid/Female
```

```text
include('fontawesome-5/Solid/Female')
```



| Illustration | Female |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Female.png) | ![illustration for Female](../../fontawesome-5/Solid/Female.Local.png) |




## Female

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Female
include('fontawesome-5/Solid/Female')

' renders the element
Female('Female', 'Female', 'an optional tech label')
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

' loads the Item which embeds the element Female
include('fontawesome-5/Solid/Female')

' renders the element
Female('Female', 'Female', 'an optional tech label')
@enduml
```

