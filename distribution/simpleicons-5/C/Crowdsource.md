# Crowdsource


```text
simpleicons-5/C/Crowdsource
```

```text
include('simpleicons-5/C/Crowdsource')
```



| Illustration | Crowdsource |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/C/Crowdsource.png) | ![illustration for Crowdsource](../../simpleicons-5/C/Crowdsource.Local.png) |




## Crowdsource

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Crowdsource
include('simpleicons-5/C/Crowdsource')

' renders the element
Crowdsource('Crowdsource', 'Crowdsource', 'an optional tech label')
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

' loads the Item which embeds the element Crowdsource
include('simpleicons-5/C/Crowdsource')

' renders the element
Crowdsource('Crowdsource', 'Crowdsource', 'an optional tech label')
@enduml
```

