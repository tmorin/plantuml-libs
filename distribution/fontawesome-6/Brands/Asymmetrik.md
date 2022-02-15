# Asymmetrik


```text
fontawesome-6/Brands/Asymmetrik
```

```text
include('fontawesome-6/Brands/Asymmetrik')
```



| Illustration | Asymmetrik |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/Asymmetrik.png) | ![illustration for Asymmetrik](../../fontawesome-6/Brands/Asymmetrik.Local.png) |




## Asymmetrik

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Asymmetrik
include('fontawesome-6/Brands/Asymmetrik')

' renders the element
Asymmetrik('Asymmetrik', 'Asymmetrik', 'an optional tech label')
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

' loads the Item which embeds the element Asymmetrik
include('fontawesome-6/Brands/Asymmetrik')

' renders the element
Asymmetrik('Asymmetrik', 'Asymmetrik', 'an optional tech label')
@enduml
```

