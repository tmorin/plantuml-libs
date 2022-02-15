# L


```text
fontawesome-6/Solid/L
```

```text
include('fontawesome-6/Solid/L')
```



| Illustration | L |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/L.png) | ![illustration for L](../../fontawesome-6/Solid/L.Local.png) |




## L

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element L
include('fontawesome-6/Solid/L')

' renders the element
L('L', 'L', 'an optional tech label')
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

' loads the Item which embeds the element L
include('fontawesome-6/Solid/L')

' renders the element
L('L', 'L', 'an optional tech label')
@enduml
```

