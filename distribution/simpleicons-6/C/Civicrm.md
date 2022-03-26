# Civicrm


```text
simpleicons-6/C/Civicrm
```

```text
include('simpleicons-6/C/Civicrm')
```



| Illustration | Civicrm |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/C/Civicrm.png) | ![illustration for Civicrm](../../simpleicons-6/C/Civicrm.Local.png) |




## Civicrm

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Civicrm
include('simpleicons-6/C/Civicrm')

' renders the element
Civicrm('Civicrm', 'Civicrm', 'an optional tech label')
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

' loads the Item which embeds the element Civicrm
include('simpleicons-6/C/Civicrm')

' renders the element
Civicrm('Civicrm', 'Civicrm', 'an optional tech label')
@enduml
```
