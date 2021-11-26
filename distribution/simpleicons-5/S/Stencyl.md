# Stencyl


```text
simpleicons-5/S/Stencyl
```

```text
include('simpleicons-5/S/Stencyl')
```



| Illustration | Stencyl |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/S/Stencyl.png) | ![illustration for Stencyl](../../simpleicons-5/S/Stencyl.Local.png) |




## Stencyl

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Stencyl
include('simpleicons-5/S/Stencyl')

' renders the element
Stencyl('Stencyl', 'Stencyl', 'an optional tech label')
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

' loads the Item which embeds the element Stencyl
include('simpleicons-5/S/Stencyl')

' renders the element
Stencyl('Stencyl', 'Stencyl', 'an optional tech label')
@enduml
```

