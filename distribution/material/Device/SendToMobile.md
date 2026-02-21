# SendToMobile


```text
material/Device/SendToMobile
```

```text
include('material/Device/SendToMobile')
```



| Illustration | SendToMobile |
| :---: | :---: |
| ![illustration for Illustration](../../material/Device/SendToMobile.png) | ![illustration for SendToMobile](../../material/Device/SendToMobile.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SendToMobileXs>`
- `<$SendToMobileSm>`
- `<$SendToMobileMd>`
- `<$SendToMobileLg>`





## SendToMobile

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element SendToMobile
include('material/Device/SendToMobile')

' renders the element
SendToMobile('SendToMobile', 'Send To Mobile', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element SendToMobile
include('material/Device/SendToMobile')

' renders the element
SendToMobile('SendToMobile', 'Send To Mobile', 'an optional tech label', 'an optional description')
@enduml
```

