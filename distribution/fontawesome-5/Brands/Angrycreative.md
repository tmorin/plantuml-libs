# Angrycreative


```text
fontawesome-5/Brands/Angrycreative
```

```text
include('fontawesome-5/Brands/Angrycreative')
```



| Illustration | Angrycreative |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/Angrycreative.png) | ![illustration for Angrycreative](../../fontawesome-5/Brands/Angrycreative.Local.png) |




## Angrycreative

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Angrycreative
include('fontawesome-5/Brands/Angrycreative')

' renders the element
Angrycreative('Angrycreative', 'Angrycreative', 'an optional tech label')
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

' loads the Item which embeds the element Angrycreative
include('fontawesome-5/Brands/Angrycreative')

' renders the element
Angrycreative('Angrycreative', 'Angrycreative', 'an optional tech label')
@enduml
```

