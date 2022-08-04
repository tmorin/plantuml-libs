# LessThanEqual


```text
fontawesome-6/Solid/LessThanEqual
```

```text
include('fontawesome-6/Solid/LessThanEqual')
```



| Illustration | LessThanEqual |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/LessThanEqual.png) | ![illustration for LessThanEqual](../../fontawesome-6/Solid/LessThanEqual.Local.png) |




## LessThanEqual

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element LessThanEqual
include('fontawesome-6/Solid/LessThanEqual')

' renders the element
LessThanEqual('LessThanEqual', 'Less Than Equal', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element LessThanEqual
include('fontawesome-6/Solid/LessThanEqual')

' renders the element
LessThanEqual('LessThanEqual', 'Less Than Equal', 'an optional tech label', 'an optional description')
@enduml
```

