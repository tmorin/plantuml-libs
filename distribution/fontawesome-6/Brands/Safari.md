# Safari


```text
fontawesome-6/Brands/Safari
```

```text
include('fontawesome-6/Brands/Safari')
```



| Illustration | Safari |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/Safari.png) | ![illustration for Safari](../../fontawesome-6/Brands/Safari.Local.png) |




## Safari

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Safari
include('fontawesome-6/Brands/Safari')

' renders the element
Safari('Safari', 'Safari', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Safari
include('fontawesome-6/Brands/Safari')

' renders the element
Safari('Safari', 'Safari', 'an optional tech label', 'an optional description')
@enduml
```

