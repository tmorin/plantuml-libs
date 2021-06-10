# GreaterThanEqual


```text
fontawesome-5/Solid/GreaterThanEqual
```

```text
include('fontawesome-5/Solid/GreaterThanEqual')
```



| Illustration | GreaterThanEqual |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/GreaterThanEqual.png) | ![illustration for GreaterThanEqual](../../fontawesome-5/Solid/GreaterThanEqual.Local.png) |




## GreaterThanEqual

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element GreaterThanEqual
include('fontawesome-5/Solid/GreaterThanEqual')

' renders the element
GreaterThanEqual('GreaterThanEqual', 'Greater Than Equal', 'an optional tech label')
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

' loads the Item which embeds the element GreaterThanEqual
include('fontawesome-5/Solid/GreaterThanEqual')

' renders the element
GreaterThanEqual('GreaterThanEqual', 'Greater Than Equal', 'an optional tech label')
@enduml
```

