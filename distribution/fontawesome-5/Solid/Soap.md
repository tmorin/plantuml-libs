# Soap


```text
fontawesome-5/Solid/Soap
```

```text
include('fontawesome-5/Solid/Soap')
```



| Illustration | Soap |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Soap.png) | ![illustration for Soap](../../fontawesome-5/Solid/Soap.Local.png) |




## Soap

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Soap
include('fontawesome-5/Solid/Soap')

' renders the element
Soap('Soap', 'Soap', 'an optional tech label')
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

' loads the Item which embeds the element Soap
include('fontawesome-5/Solid/Soap')

' renders the element
Soap('Soap', 'Soap', 'an optional tech label')
@enduml
```

