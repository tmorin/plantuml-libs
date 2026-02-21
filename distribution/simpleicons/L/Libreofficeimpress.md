# Libreofficeimpress


```text
simpleicons/L/Libreofficeimpress
```

```text
include('simpleicons/L/Libreofficeimpress')
```



| Illustration | Libreofficeimpress |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/L/Libreofficeimpress.png) | ![illustration for Libreofficeimpress](../../simpleicons/L/Libreofficeimpress.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$LibreofficeimpressXs>`
- `<$LibreofficeimpressSm>`
- `<$LibreofficeimpressMd>`
- `<$LibreofficeimpressLg>`





## Libreofficeimpress

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Libreofficeimpress
include('simpleicons/L/Libreofficeimpress')

' renders the element
Libreofficeimpress('Libreofficeimpress', 'Libreofficeimpress', 'an optional tech label', 'an optional description')
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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Libreofficeimpress
include('simpleicons/L/Libreofficeimpress')

' renders the element
Libreofficeimpress('Libreofficeimpress', 'Libreofficeimpress', 'an optional tech label', 'an optional description')
@enduml
```

