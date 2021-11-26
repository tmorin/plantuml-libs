# Apachejmeter


```text
simpleicons-5/A/Apachejmeter
```

```text
include('simpleicons-5/A/Apachejmeter')
```



| Illustration | Apachejmeter |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/A/Apachejmeter.png) | ![illustration for Apachejmeter](../../simpleicons-5/A/Apachejmeter.Local.png) |




## Apachejmeter

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Apachejmeter
include('simpleicons-5/A/Apachejmeter')

' renders the element
Apachejmeter('Apachejmeter', 'Apachejmeter', 'an optional tech label')
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
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Apachejmeter
include('simpleicons-5/A/Apachejmeter')

' renders the element
Apachejmeter('Apachejmeter', 'Apachejmeter', 'an optional tech label')
@enduml
```

