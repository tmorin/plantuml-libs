# NetworkCheck


```text
material/Notification/NetworkCheck
```

```text
include('material/Notification/NetworkCheck')
```



| Illustration | NetworkCheck |
| :---: | :---: |
| ![illustration for Illustration](../../material/Notification/NetworkCheck.png) | ![illustration for NetworkCheck](../../material/Notification/NetworkCheck.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$NetworkCheckXs>`
- `<$NetworkCheckSm>`
- `<$NetworkCheckMd>`
- `<$NetworkCheckLg>`





## NetworkCheck

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element NetworkCheck
include('material/Notification/NetworkCheck')

' renders the element
NetworkCheck('NetworkCheck', 'Network Check', 'an optional tech label', 'an optional description')
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
include('material/bootstrap')

' loads the Item which embeds the element NetworkCheck
include('material/Notification/NetworkCheck')

' renders the element
NetworkCheck('NetworkCheck', 'Network Check', 'an optional tech label', 'an optional description')
@enduml
```

