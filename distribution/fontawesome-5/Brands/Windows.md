# Windows


```text
fontawesome-5/Brands/Windows
```

```text
include('fontawesome-5/Brands/Windows')
```



| Illustration | Windows |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/Windows.png) | ![illustration for Windows](../../fontawesome-5/Brands/Windows.Local.png) |




## Windows

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Windows
include('fontawesome-5/Brands/Windows')

' renders the element
Windows('Windows', 'Windows', 'an optional tech label')
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

' loads the Item which embeds the element Windows
include('fontawesome-5/Brands/Windows')

' renders the element
Windows('Windows', 'Windows', 'an optional tech label')
@enduml
```

