# Abletonlive


```text
simpleicons-5/A/Abletonlive
```

```text
include('simpleicons-5/A/Abletonlive')
```



| Illustration | Abletonlive |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/A/Abletonlive.png) | ![illustration for Abletonlive](../../simpleicons-5/A/Abletonlive.Local.png) |




## Abletonlive

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Abletonlive
include('simpleicons-5/A/Abletonlive')

' renders the element
Abletonlive('Abletonlive', 'Abletonlive', 'an optional tech label')
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

' loads the Item which embeds the element Abletonlive
include('simpleicons-5/A/Abletonlive')

' renders the element
Abletonlive('Abletonlive', 'Abletonlive', 'an optional tech label')
@enduml
```

