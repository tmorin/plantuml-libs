# Redeem


```text
material-4/Action/Redeem
```

```text
include('material-4/Action/Redeem')
```



| Illustration | Redeem |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/Redeem.png) | ![illustration for Redeem](../../material-4/Action/Redeem.Local.png) |




## Redeem

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Redeem
include('material-4/Action/Redeem')

' renders the element
Redeem('Redeem', 'Redeem', 'an optional tech label')
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
include('material-4/bootstrap')

' loads the Item which embeds the element Redeem
include('material-4/Action/Redeem')

' renders the element
Redeem('Redeem', 'Redeem', 'an optional tech label')
@enduml
```

