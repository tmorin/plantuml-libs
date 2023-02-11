# Alibabadotcom


```text
simpleicons-8/A/Alibabadotcom
```

```text
include('simpleicons-8/A/Alibabadotcom')
```



| Illustration | Alibabadotcom |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/A/Alibabadotcom.png) | ![illustration for Alibabadotcom](../../simpleicons-8/A/Alibabadotcom.Local.png) |




## Alibabadotcom

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Alibabadotcom
include('simpleicons-8/A/Alibabadotcom')

' renders the element
Alibabadotcom('Alibabadotcom', 'Alibabadotcom', 'an optional tech label', 'an optional description')
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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Alibabadotcom
include('simpleicons-8/A/Alibabadotcom')

' renders the element
Alibabadotcom('Alibabadotcom', 'Alibabadotcom', 'an optional tech label', 'an optional description')
@enduml
```

