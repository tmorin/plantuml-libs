# AccessibleIcon


```text
fontawesome-5/Brands/AccessibleIcon
```

```text
include('fontawesome-5/Brands/AccessibleIcon')
```



| Illustration | AccessibleIcon |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/AccessibleIcon.png) | ![illustration for AccessibleIcon](../../fontawesome-5/Brands/AccessibleIcon.Local.png) |




## AccessibleIcon

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element AccessibleIcon
include('fontawesome-5/Brands/AccessibleIcon')

' renders the element
AccessibleIcon('AccessibleIcon', 'Accessible Icon', 'an optional tech label')
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

' loads the Item which embeds the element AccessibleIcon
include('fontawesome-5/Brands/AccessibleIcon')

' renders the element
AccessibleIcon('AccessibleIcon', 'Accessible Icon', 'an optional tech label')
@enduml
```

