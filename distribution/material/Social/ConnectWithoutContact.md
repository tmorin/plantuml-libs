# ConnectWithoutContact


```text
material/Social/ConnectWithoutContact
```

```text
include('material/Social/ConnectWithoutContact')
```



| Illustration | ConnectWithoutContact |
| :---: | :---: |
| ![illustration for Illustration](../../material/Social/ConnectWithoutContact.png) | ![illustration for ConnectWithoutContact](../../material/Social/ConnectWithoutContact.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ConnectWithoutContactXs>`
- `<$ConnectWithoutContactSm>`
- `<$ConnectWithoutContactMd>`
- `<$ConnectWithoutContactLg>`





## ConnectWithoutContact

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element ConnectWithoutContact
include('material/Social/ConnectWithoutContact')

' renders the element
ConnectWithoutContact('ConnectWithoutContact', 'Connect Without Contact', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ConnectWithoutContact
include('material/Social/ConnectWithoutContact')

' renders the element
ConnectWithoutContact('ConnectWithoutContact', 'Connect Without Contact', 'an optional tech label', 'an optional description')
@enduml
```

