# Facebooklive


```text
simpleicons-6/F/Facebooklive
```

```text
include('simpleicons-6/F/Facebooklive')
```



| Illustration | Facebooklive |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/F/Facebooklive.png) | ![illustration for Facebooklive](../../simpleicons-6/F/Facebooklive.Local.png) |




## Facebooklive

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Facebooklive
include('simpleicons-6/F/Facebooklive')

' renders the element
Facebooklive('Facebooklive', 'Facebooklive', 'an optional tech label')
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
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Facebooklive
include('simpleicons-6/F/Facebooklive')

' renders the element
Facebooklive('Facebooklive', 'Facebooklive', 'an optional tech label')
@enduml
```

