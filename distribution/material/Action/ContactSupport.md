# ContactSupport


```text
material/Action/ContactSupport
```

```text
include('material/Action/ContactSupport')
```



| Illustration | ContactSupport |
| :---: | :---: |
| ![illustration for Illustration](../../material/Action/ContactSupport.png) | ![illustration for ContactSupport](../../material/Action/ContactSupport.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ContactSupportXs>`
- `<$ContactSupportSm>`
- `<$ContactSupportMd>`
- `<$ContactSupportLg>`





## ContactSupport

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element ContactSupport
include('material/Action/ContactSupport')

' renders the element
ContactSupport('ContactSupport', 'Contact Support', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ContactSupport
include('material/Action/ContactSupport')

' renders the element
ContactSupport('ContactSupport', 'Contact Support', 'an optional tech label', 'an optional description')
@enduml
```

