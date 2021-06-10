# BookMedical


```text
fontawesome-5/Solid/BookMedical
```

```text
include('fontawesome-5/Solid/BookMedical')
```



| Illustration | BookMedical |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/BookMedical.png) | ![illustration for BookMedical](../../fontawesome-5/Solid/BookMedical.Local.png) |




## BookMedical

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element BookMedical
include('fontawesome-5/Solid/BookMedical')

' renders the element
BookMedical('BookMedical', 'Book Medical', 'an optional tech label')
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

' loads the Item which embeds the element BookMedical
include('fontawesome-5/Solid/BookMedical')

' renders the element
BookMedical('BookMedical', 'Book Medical', 'an optional tech label')
@enduml
```

