# Mms


```text
material-4/Notification/Mms
```

```text
include('material-4/Notification/Mms')
```



| Illustration | Mms |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Notification/Mms.png) | ![illustration for Mms](../../material-4/Notification/Mms.Local.png) |




## Mms

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Mms
include('material-4/Notification/Mms')

' renders the element
Mms('Mms', 'Mms', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Mms
include('material-4/Notification/Mms')

' renders the element
Mms('Mms', 'Mms', 'an optional tech label', 'an optional description')
@enduml
```

