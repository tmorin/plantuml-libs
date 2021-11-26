# Skype


```text
fontawesome-5/Brands/Skype
```

```text
include('fontawesome-5/Brands/Skype')
```



| Illustration | Skype |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/Skype.png) | ![illustration for Skype](../../fontawesome-5/Brands/Skype.Local.png) |




## Skype

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Skype
include('fontawesome-5/Brands/Skype')

' renders the element
Skype('Skype', 'Skype', 'an optional tech label')
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

' loads the Item which embeds the element Skype
include('fontawesome-5/Brands/Skype')

' renders the element
Skype('Skype', 'Skype', 'an optional tech label')
@enduml
```

