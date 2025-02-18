# Nutanix


```text
simpleicons-14/N/Nutanix
```

```text
include('simpleicons-14/N/Nutanix')
```



| Illustration | Nutanix |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/N/Nutanix.png) | ![illustration for Nutanix](../../simpleicons-14/N/Nutanix.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$NutanixXs>`
- `<$NutanixSm>`
- `<$NutanixMd>`
- `<$NutanixLg>`





## Nutanix

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Nutanix
include('simpleicons-14/N/Nutanix')

' renders the element
Nutanix('Nutanix', 'Nutanix', 'an optional tech label', 'an optional description')
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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Nutanix
include('simpleicons-14/N/Nutanix')

' renders the element
Nutanix('Nutanix', 'Nutanix', 'an optional tech label', 'an optional description')
@enduml
```

