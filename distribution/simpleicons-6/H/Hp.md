# Hp


```text
simpleicons-6/H/Hp
```

```text
include('simpleicons-6/H/Hp')
```



| Illustration | Hp |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/H/Hp.png) | ![illustration for Hp](../../simpleicons-6/H/Hp.Local.png) |




## Hp

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Hp
include('simpleicons-6/H/Hp')

' renders the element
Hp('Hp', 'Hp', 'an optional tech label')
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

' loads the Item which embeds the element Hp
include('simpleicons-6/H/Hp')

' renders the element
Hp('Hp', 'Hp', 'an optional tech label')
@enduml
```

