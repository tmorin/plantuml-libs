# Facebooklive


```text
simpleicons-5/F/Facebooklive
```

```text
include('simpleicons-5/F/Facebooklive')
```



| Illustration | Facebooklive |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/F/Facebooklive.png) | ![illustration for Facebooklive](../../simpleicons-5/F/Facebooklive.Local.png) |




## Facebooklive

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Facebooklive
include('simpleicons-5/F/Facebooklive')

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
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Facebooklive
include('simpleicons-5/F/Facebooklive')

' renders the element
Facebooklive('Facebooklive', 'Facebooklive', 'an optional tech label')
@enduml
```

