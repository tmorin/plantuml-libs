# FontAwesomeFlag


```text
fontawesome-5/Brands/FontAwesomeFlag
```

```text
include('fontawesome-5/Brands/FontAwesomeFlag')
```



| Illustration | FontAwesomeFlag |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/FontAwesomeFlag.png) | ![illustration for FontAwesomeFlag](../../fontawesome-5/Brands/FontAwesomeFlag.Local.png) |




## FontAwesomeFlag

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element FontAwesomeFlag
include('fontawesome-5/Brands/FontAwesomeFlag')

' renders the element
FontAwesomeFlag('FontAwesomeFlag', 'Font Awesome Flag', 'an optional tech label')
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

' loads the Item which embeds the element FontAwesomeFlag
include('fontawesome-5/Brands/FontAwesomeFlag')

' renders the element
FontAwesomeFlag('FontAwesomeFlag', 'Font Awesome Flag', 'an optional tech label')
@enduml
```

