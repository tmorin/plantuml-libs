# Crowdsource


```text
simpleicons-8/C/Crowdsource
```

```text
include('simpleicons-8/C/Crowdsource')
```



| Illustration | Crowdsource |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/C/Crowdsource.png) | ![illustration for Crowdsource](../../simpleicons-8/C/Crowdsource.Local.png) |




## Crowdsource

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Crowdsource
include('simpleicons-8/C/Crowdsource')

' renders the element
Crowdsource('Crowdsource', 'Crowdsource', 'an optional tech label', 'an optional description')
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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Crowdsource
include('simpleicons-8/C/Crowdsource')

' renders the element
Crowdsource('Crowdsource', 'Crowdsource', 'an optional tech label', 'an optional description')
@enduml
```

