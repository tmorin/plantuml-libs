# LessThanEqual


```text
fontawesome-5/Solid/LessThanEqual
```

```text
include('fontawesome-5/Solid/LessThanEqual')
```



| Illustration | LessThanEqual |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/LessThanEqual.png) | ![illustration for LessThanEqual](../../fontawesome-5/Solid/LessThanEqual.Local.png) |




## LessThanEqual

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element LessThanEqual
include('fontawesome-5/Solid/LessThanEqual')

' renders the element
LessThanEqual('LessThanEqual', 'Less Than Equal', 'an optional tech label')
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

' loads the Item which embeds the element LessThanEqual
include('fontawesome-5/Solid/LessThanEqual')

' renders the element
LessThanEqual('LessThanEqual', 'Less Than Equal', 'an optional tech label')
@enduml
```

