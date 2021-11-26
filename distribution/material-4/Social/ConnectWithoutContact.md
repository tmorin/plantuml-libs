# ConnectWithoutContact


```text
material-4/Social/ConnectWithoutContact
```

```text
include('material-4/Social/ConnectWithoutContact')
```



| Illustration | ConnectWithoutContact |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Social/ConnectWithoutContact.png) | ![illustration for ConnectWithoutContact](../../material-4/Social/ConnectWithoutContact.Local.png) |




## ConnectWithoutContact

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element ConnectWithoutContact
include('material-4/Social/ConnectWithoutContact')

' renders the element
ConnectWithoutContact('ConnectWithoutContact', 'Connect Without Contact', 'an optional tech label')
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

' loads the Item which embeds the element ConnectWithoutContact
include('material-4/Social/ConnectWithoutContact')

' renders the element
ConnectWithoutContact('ConnectWithoutContact', 'Connect Without Contact', 'an optional tech label')
@enduml
```

