# Abletonlive


```text
simpleicons-8/A/Abletonlive
```

```text
include('simpleicons-8/A/Abletonlive')
```



| Illustration | Abletonlive |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/A/Abletonlive.png) | ![illustration for Abletonlive](../../simpleicons-8/A/Abletonlive.Local.png) |




## Abletonlive

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Abletonlive
include('simpleicons-8/A/Abletonlive')

' renders the element
Abletonlive('Abletonlive', 'Abletonlive', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Abletonlive
include('simpleicons-8/A/Abletonlive')

' renders the element
Abletonlive('Abletonlive', 'Abletonlive', 'an optional tech label', 'an optional description')
@enduml
```

