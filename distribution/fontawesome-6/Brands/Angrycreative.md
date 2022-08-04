# Angrycreative


```text
fontawesome-6/Brands/Angrycreative
```

```text
include('fontawesome-6/Brands/Angrycreative')
```



| Illustration | Angrycreative |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/Angrycreative.png) | ![illustration for Angrycreative](../../fontawesome-6/Brands/Angrycreative.Local.png) |




## Angrycreative

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Angrycreative
include('fontawesome-6/Brands/Angrycreative')

' renders the element
Angrycreative('Angrycreative', 'Angrycreative', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Angrycreative
include('fontawesome-6/Brands/Angrycreative')

' renders the element
Angrycreative('Angrycreative', 'Angrycreative', 'an optional tech label', 'an optional description')
@enduml
```

