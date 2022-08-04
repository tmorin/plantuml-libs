# Skype


```text
fontawesome-6/Brands/Skype
```

```text
include('fontawesome-6/Brands/Skype')
```



| Illustration | Skype |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/Skype.png) | ![illustration for Skype](../../fontawesome-6/Brands/Skype.Local.png) |




## Skype

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Skype
include('fontawesome-6/Brands/Skype')

' renders the element
Skype('Skype', 'Skype', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Skype
include('fontawesome-6/Brands/Skype')

' renders the element
Skype('Skype', 'Skype', 'an optional tech label', 'an optional description')
@enduml
```

